import {createSlice} from '@reduxjs/toolkit'
import moment from 'moment'

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    googleAuthToken: null,
    rememberMeDetails: null,
  },
  reducers: {
    authenticateUserWithGoogleLogin: (state, {payload: tokenResponse}) => {
      const updatedResponse = {...tokenResponse}
      updatedResponse.expires_in = moment().add(updatedResponse.expires_in, 'second').format()
      state.googleAuthToken = updatedResponse
    },
    setRememberMeDetails: (state, {payload}) => {
      console.log(payload)
    },
    authenticateUserWithEmail: (state, {payload: token}) => {
      state.token = token
    },
  },
})

export const {authenticateUserWithGoogleLogin, authenticateUserWithEmail, setRememberMeDetails} =
  authReducer.actions
export default authReducer.reducer
