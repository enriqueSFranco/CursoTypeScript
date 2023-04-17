import { configureStore, type Middleware } from '@reduxjs/toolkit'
import type { UserWithId } from '../types'
import usersReducer, { rollbackUser } from '../features/users/usersSlice'
import formActionTypeReducer from '../features/users/formActionTypeSlice'
import { toast } from 'sonner'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  // console.log(store.getState()) estado inicial
  // console.log(action) accion que se ejecuta
  next(action) // ejecutando la accion
  // console.log(store.getState()) estado actual
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState())) // accion que se ejecuta despues del action
}

const syncWithDataMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  const previousState = store.getState()
  next(action)

  if (type === 'users/deleteUser') {
    const userToRemove = previousState.users.find((user: UserWithId) => user.id === payload)
    const userIdToRemove: string = payload
    fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          toast.success(`Usuario ${userIdToRemove} eliminado correctamente`)
        } else {
          throw new Error('Opps, ha ocurrido un error')
        }
      })
      .catch(err => {
        toast.error(`Error deleting user ${userIdToRemove}`)
        if (userToRemove === undefined) {
          store.dispatch(rollbackUser(userToRemove))
        }
        console.error(err)
      })
  }

  if (type === 'users/createUser') {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'POST' })
      .then(res => {
        if (res.ok) {
          toast.success(`Usuario ${payload.name} creado correctamente`)
        } else {
          throw new Error('Opps, ha ocurrido un error')
        }
      })
      .catch(err => { console.error(err) })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer,
    formActionType: formActionTypeReducer
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDataMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
