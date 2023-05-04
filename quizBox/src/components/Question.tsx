import { useGame, useQuestion } from '../store'
import { shuffleArray } from '../utils/shuffleArray'
import { Question } from '../types.d'
import { GameStatus } from '../types.d'
import styles from '../styles/Question.module.css'
import Loader from './Loader'

interface Props {
  questionInfo: Question
}

const Question: React.FC<Props> = ({ questionInfo }) => {
  const handleGameStatus = useGame(state => state.handleGameStatus)
  const { questions, currentQuestion, handleAnswer } = useQuestion(state => ({
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    handleAnswer: state.handleAnswer
  }))

  const handleGame = (answer: string) => () => {
    handleAnswer(answer)
    if (currentQuestion === questions.length)
      handleGameStatus(GameStatus.GameOver)
    else handleGameStatus(GameStatus.Playing)
  }

  if (questionInfo === undefined) {
    return <Loader />
  }

  const { question, category, difficulty, correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = questionInfo
  return (
    <div className={styles.wrapperQuestion}>
      <article className={styles.question}>
        <div className={styles.currentQuestion}>
          <span>{currentQuestion} / {questions.length}</span>
        </div>
        <p>{question}</p>
        <div className={styles.questionTag}><p>{category} - {difficulty}</p></div>
      </article>
      <div className={styles.wrapperOptions}>
        <ul className={styles.optionsList}>
          {shuffleArray([...incorrectAnswers, correctAnswer].map(answer => (
            <li key={`answer-${answer}`}>
              <button className={styles.optionBtn} onClick={handleGame(answer)}>{answer}</button>
            </li>
          )))}
        </ul>
      </div>
    </div>
  )
}

export default Question