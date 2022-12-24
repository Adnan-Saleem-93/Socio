import {createSlice} from '@reduxjs/toolkit'

export const authReducer = createSlice({
  name: 'auth',
  initialState: {token: null, rememberMeDetails: null},
  reducers: {
    authenticateUser: (state) => {},
    setRememberMeDetails: (state, {payload}) => {
      console.log(payload)
    },
  },
})

export const {authenticateUser, setRememberMeDetails} = authReducer.actions
export default authReducer.reducer
