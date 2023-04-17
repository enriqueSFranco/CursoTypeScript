import { useAppDispatch, useAppSelector } from './store'
import { setActionType } from '../features/users/formActionTypeSlice'

export const useFormActionType = (): {
  actionType: string
  handleFormActionType: (action: string) => void
} => {
  const dispatch = useAppDispatch()
  const actionType = useAppSelector(state => state.formActionType.actionType)

  const handleFormActionType = (action: string): void => {
    dispatch(setActionType(action))
  }

  return { actionType, handleFormActionType }
}
