import { createSlice } from '@reduxjs/toolkit'
import api from '../api/data.json'

export interface User {
  avatar: string
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

const initialState: UserWithId[] = api.data

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer
