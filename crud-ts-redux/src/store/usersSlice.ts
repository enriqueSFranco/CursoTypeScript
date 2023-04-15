import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UserId, UserWithId, User } from '../types'
import { DEFAULT_STATE } from '../constants'
import { uuid } from '../utils/uuid'

const initialState: UserWithId[] = (function () { // IIFE
  const store = window.localStorage.getItem('__redux__state__')
  if (store !== null) return JSON.parse(store).users
  return DEFAULT_STATE
}())

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      const id = uuid()
      const avatar = `https://unavatar.io/github/${action.payload.name}`
      return [...state, { id, avatar, ...action.payload }]
    },
    deleteUser: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    }
  }
})

export const { createUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer
