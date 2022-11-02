import {createSlice} from '@reduxjs/toolkit'

const postReducer = createSlice({
  name: 'posts',
  initialState: {
    data: []
  },
  reducers: {
    getPosts: (state) => {}
  }
})

export const {getPosts} = postReducer.actions
export default postReducer.reducer
