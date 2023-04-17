import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UserId, UserWithId, User } from '../../types'
import { DEFAULT_STATE } from '../../constants'
import { uuid } from '../../utils/uuid'

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
    },
    editUser: (state, action: PayloadAction<UserWithId>) => {
      const { id, name, email, github } = action.payload
      const foundUserIndex = state.findIndex(user => user.id === id)

      if (foundUserIndex !== -1) {
        console.log({ id, name, email, github })
        state[foundUserIndex] = { ...state[foundUserIndex], name, email, github }
      }
      return state
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const { id } = action.payload
      const userIsAlreadyDefined = state.some(user => user.id === id)

      if (!userIsAlreadyDefined) {
        return [...state, action.payload]
      }
    }
  }
})

export const { createUser, deleteUser, editUser, rollbackUser } = usersSlice.actions

export default usersSlice.reducer
