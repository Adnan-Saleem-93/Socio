import {createSlice} from '@reduxjs/toolkit'

const postReducer = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    isLoading: false,
    error: ''
  },
  reducers: {
    getPosts: (state, {payload}) => {},
    createPost: (state, {payload}) => {}
  }
})

export const {getPosts} = postReducer.actions
export default postReducer.reducer
