import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { UserId, UserWithId } from '../types'
import api from '../api/data.json'

const initialState: UserWithId[] = api.data

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    }
  }
})

export const { deleteUser } = usersSlice.actions

export default usersSlice.reducer
