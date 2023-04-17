import { createSlice } from '@reduxjs/toolkit'

interface FormActionType {
  actionType: 'create' | 'edit'
}

const initialState: FormActionType = {
  actionType: 'create'
}

export const FormActionTypeSlice = createSlice({
  name: 'formActionType',
  initialState,
  reducers: {
    setActionType: (state, action) => {
      state.actionType = action.payload
    }
  }
})

export const { setActionType } = FormActionTypeSlice.actions

export default FormActionTypeSlice.reducer
