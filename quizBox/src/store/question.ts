import { create } from 'zustand'
import { Question } from '../types'
import { getQuestions } from '../services/getQuestions'

const AMOUNT = 10

interface QuestionState {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: () => Promise<void>
}

export const useQuestion = create<QuestionState>((set) => ({
  questions: [],
  currentQuestion: 1,
  fetchQuestions: async (): Promise<void> => {
    try {
      const response = await getQuestions(AMOUNT)
      set({ questions: response })
    } catch (error) {
      throw error
    }
  }
}))