import { create } from "zustand"

interface FormState {
  orderByYear: boolean
  setSortByYear: (value: boolean) => void
}

export const useForm = create<FormState>((set) => ({
  orderByYear: false,
  setSortByYear: (value) => set({ orderByYear: value })
}))