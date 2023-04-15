import { useCallback } from 'react'
import { useAppDispatch } from '../hooks/store'
import { createUser, deleteUser } from '../store/usersSlice'
import { type User, type UserId } from '../types'

export const useUserActions = (): {
  handleDeleteUser: (id: UserId) => void
  handleCreateUser: (payload: User) => void
} => {
  const dispatch = useAppDispatch()

  const handleDeleteUser = useCallback((id: UserId): void => {
    dispatch(deleteUser(id))
  }, [dispatch])

  const handleCreateUser = useCallback((payload: User): void => {
    dispatch(createUser(payload))
  }, [dispatch])

  return { handleCreateUser, handleDeleteUser }
}
