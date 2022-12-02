import {createSlice} from '@reduxjs/toolkit'
import {NotificationTypes} from '../../utils/constants'
import toast from 'react-hot-toast'

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
      toast.success(payload.title)
    },
    errorMessage: (state, {payload}) => {
      toast.error(payload.title)
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
