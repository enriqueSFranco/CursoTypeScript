import api from './mocks/apiResponse.json'
import Question from './components/Question'
import './App.css'

const { results } = api

function App() {
  return (
    <>
      <main>
        <section>
          {results.map(({ question, category, difficulty, correct_answer, incorrect_answers }) => (
            <Question
              key={`question-${question}`}
              question={question}
              correctAnswer={correct_answer}
              incorrectAnswers={incorrect_answers}
              category={category}
              difficulty={difficulty}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
