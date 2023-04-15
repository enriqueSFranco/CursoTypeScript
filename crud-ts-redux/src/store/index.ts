import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  console.log(store.getState()) // estado inicial
  console.log(action) // accion que se ejecuta
  next(action) // ejecutando la accion
  console.log(store.getState()) // estado actual
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState())) // accion que se ejecuta despues del action
}

const syncWithDataMiddleware: Middleware = (store) => (next) => (action) => {

}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
