import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import moment from 'moment'
import {postAPIs} from '../../utils/api'

export const authReducer = createSlice({
  name: 'auth',
  initialState: {token: null, googleAuthToken: null, rememberMeDetails: null, isLoading: false},
  reducers: {
    authenticateUserWithGoogleLogin: (state, {payload: tokenResponse}) => {
      const updatedResponse = {...tokenResponse}
      updatedResponse.expires_in = moment().add(updatedResponse.expires_in, 'second').format()
      state.googleAuthToken = updatedResponse
    },
    setRememberMeDetails: (state, {payload}) => {
      console.log(payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.isLoading = false
        if (payload) {
          state.token = payload
        }
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
      })
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signUp.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.token = payload
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const login = createAsyncThunk('auth/Login', async ({body}) => {
  return await postAPIs.Login({body})
})
export const signUp = createAsyncThunk('auth/signUp', async ({body}) => {
  return await postAPIs.SignUp({body})
})

export const {authenticateUserWithGoogleLogin, setRememberMeDetails} = authReducer.actions
export default authReducer.reducer
