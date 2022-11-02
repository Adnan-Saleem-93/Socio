import {createSlice} from '@reduxjs/toolkit'

const postReducer = createSlice({
  name: 'posts',
  initialState: {
    data: []
  },
  reducers: {
    getPosts: (state, {payload}) => {
      state = state
    }
  }
})

export const {getPosts} = postReducer.actions
export default postReducer.reducer
