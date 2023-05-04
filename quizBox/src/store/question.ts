import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Question, Type } from '../types.d'
import { getQuestions } from '../services/getQuestions'

interface QuestionState {
  questions: Question[]
  loading: boolean
  currentQuestion: number
  totalPoints: number,
  handleAnswer: (userAnswer: string) => void
  fetchQuestions: (amount: number) => Promise<void>
  handleResetGame: () => void
}

export const useQuestion = create<QuestionState>()(
  persist(
    (set, get) => ({
      questions: [],
      loading: false,
      currentQuestion: 1,
      totalPoints: 0,
      handleAnswer: (userAnswer: string): void => {
        const { questions, currentQuestion } = get()
        const actualQuestion = questions[currentQuestion]
        const { correct_answer: correctAnswer, type } = actualQuestion

        if (correctAnswer === userAnswer) {
          set(state => ({ totalPoints: type === Type.Multiple ? state.totalPoints += 10 : state.totalPoints += 5 }))
        }
        if (currentQuestion === questions.length) return
        else set(state => ({ currentQuestion: state.currentQuestion + 1 }))
      },
      fetchQuestions: async (amount: number): Promise<void> => {
        try {
          const response = await getQuestions(amount)
          set({ questions: response })
        } catch (error) {
          throw error
        }
      },
      handleResetGame: () => {
        set({ currentQuestion: 1, questions: [] })
      }
    }),
    {
      name: '__zustand__state__',
      storage: createJSONStorage(() => localStorage)
    }
  )
)