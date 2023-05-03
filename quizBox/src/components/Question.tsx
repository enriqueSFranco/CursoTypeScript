import styles from '../styles/Question.module.css'

interface Props {
  question: string
  correctAnswer: string
  incorrectAnswers: string[]
  category: string,
  difficulty: string
}

const Question: React.FC<Props> = ({ question, category, difficulty, correctAnswer, incorrectAnswers }) => {
  return (
    <div className={styles.wrapperQuestion}>
      <p>{question}</p>
      <strong>{category}</strong>
      <p>Difficulty: <strong>{difficulty}</strong></p>
      <ul>
        <li><button>{correctAnswer}</button></li>
        {incorrectAnswers.map(answer => (
          <li key={`answer-${answer}`}>
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question