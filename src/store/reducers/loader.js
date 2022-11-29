import {createSlice} from '@reduxjs/toolkit'

export const loaderReducer = createSlice({
  name: 'loader',
  initialState: {
    show: false
  },
  reducers: {
    startLoading: (state) => {
      state.show = true
    },
    stopLoading: (state) => {
      state.show = false
    }
  }
})

export const {startLoading, stopLoading} = loaderReducer.actions
export default loaderReducer.reducer
