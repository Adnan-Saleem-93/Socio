import {createSlice} from '@reduxjs/toolkit'
import moment from 'moment'

export const authReducer = createSlice({
  name: 'auth',
  initialState: {token: null, googleAuthToken: null, rememberMeDetails: null},
  reducers: {
    authenticateUser: (state, {payload: tokenResponse}) => {
      const updatedResponse = {...tokenResponse}
      updatedResponse.expires_in = moment().add(updatedResponse.expires_in, 'second').format()
      state.googleAuthToken = updatedResponse
    },
    setRememberMeDetails: (state, {payload}) => {
      console.log(payload)
    },
  },
})

export const {authenticateUser, setRememberMeDetails} = authReducer.actions
export default authReducer.reducer
