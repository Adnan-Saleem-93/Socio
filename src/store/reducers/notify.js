import {createSlice} from '@reduxjs/toolkit'
import {NotificationTypes} from '../../utils/constants'

export const notifyReducer = createSlice({
  name: 'notify',
  initialState: {
    open: false,
    timeOut: 5000,
    title: '',
    message: '',
    type: NotificationTypes.SUCCESS
  },
  reducers: {
    successMessage: (state, {payload}) => {
      state.open = true
      state.title = payload.title
      state.message = payload.message
    },
    errorMessage: (state, {payload}) => {
      state.open = true
      state.title = payload.title
      state.message = payload.message
      state.type = 'error'
    },
    hideMessage: (state) => {
      state.open = false
      state.title = ''
      state.message = ''
      state.type = 'info'
    }
  }
})

export const {successMessage, errorMessage, hideMessage} = notifyReducer.actions
export default notifyReducer.reducer
