import { useEffect } from 'react'
import { useQuestion } from './store/question'
import Question from './components/Question'
import GameOver from './pages/GameOver'
import './App.css'

function App() {
  const { questions, currentQuestion, fetchQuestions } = useQuestion((state) => ({ questions: state.questions, currentQuestion: state.currentQuestion, fetchQuestions: state.fetchQuestions }))
  const actualQuestion = questions[currentQuestion]

  useEffect(() => { fetchQuestions(10) }, [])
  return (
    <>
      <main>
        {currentQuestion === questions.length && <GameOver />}
        {currentQuestion !== questions.length && (
          <section>
            <Question questionInfo={actualQuestion} />
          </section>
        )}
      </main>
    </>
  )
}

export default App
