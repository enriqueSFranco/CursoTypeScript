import { useQuestion } from '../store/question'
import { Question } from '../types'
import styles from '../styles/Question.module.css'

interface Props {
  questionInfo: Question
}

const Question: React.FC<Props> = ({ questionInfo }) => {
  const { questions, currentQuestion } = useQuestion(state => ({ questions: state.questions, currentQuestion: state.currentQuestion }))

  if (questionInfo === undefined) {
    return (
      <div>
        <h2>cargando</h2>
      </div>
    )
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
          <li><button className={styles.optionBtn}>{correctAnswer}</button></li>
          {incorrectAnswers.map(answer => (
            <li key={`answer-${answer}`}>
              <button className={styles.optionBtn}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Question