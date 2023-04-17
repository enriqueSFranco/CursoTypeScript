import { useCallback } from 'react'
import { useAppDispatch } from '../hooks/store'
import { createUser, deleteUser, editUser } from '../features/users/usersSlice'
import type { User, UserId, UserWithId } from '../types'

export const useUserActions = (): {
  handleDeleteUser: (id: UserId) => void
  handleCreateUser: (payload: User) => void
  handleEditUser: (payload: UserWithId) => void
} => {
  const dispatch = useAppDispatch()

  const handleDeleteUser = useCallback((id: UserId): void => {
    dispatch(deleteUser(id))
  }, [dispatch])

  const handleEditUser = (payload: UserWithId): void => {
    dispatch(editUser(payload))
  }

  const handleCreateUser = useCallback((payload: User): void => {
    dispatch(createUser(payload))
  }, [dispatch])

  return { handleCreateUser, handleDeleteUser, handleEditUser }
}
