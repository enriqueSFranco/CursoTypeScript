import { useAppDispatch } from '../hooks/store'
import { deleteUser } from '../store/usersSlice'
import { type UserId } from '../types'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const handleDeleteUser = (id: UserId) => {
    dispatch(deleteUser(id))
  }

  return { handleDeleteUser }
}
