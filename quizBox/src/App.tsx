import { useEffect } from 'react'
import { useQuestion } from './store/question'
import Question from './components/Question'
import './App.css'

function App() {
  const { questions, currentQuestion, fetchQuestions } = useQuestion((state) => ({ questions: state.questions, currentQuestion: state.currentQuestion, fetchQuestions: state.fetchQuestions }))
  const actualQuestion = questions[currentQuestion]

  useEffect(() => { fetchQuestions() }, [])

  return (
    <>
      <main>
        <div>

        </div>
        <section>
          <Question questionInfo={actualQuestion} />
        </section>
      </main>
    </>
  )
}

export default App
