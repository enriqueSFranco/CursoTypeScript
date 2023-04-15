import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import { toast } from 'sonner'
import { User } from '../types'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  console.log(store.getState()) // estado inicial
  console.log(action) // accion que se ejecuta
  next(action) // ejecutando la accion
  console.log(store.getState()) // estado actual
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState())) // accion que se ejecuta despues del action
}

const syncWithDataMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  next(action)

  if (type === 'users/deleteUser') {
    fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          toast.success(`Usuario ${payload} eliminado correctamente`)
        } else {
          throw new Error('Opps, ha ocurrido un erro')
        }
      })
      .catch(err => { console.error(err) })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDataMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
