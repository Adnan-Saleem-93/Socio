import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getAPIs} from '../../utils/api'

const postReducer = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    error: ''
  },
  reducers: {
    createPost: (state, {payload}) => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, {payload}) => {
        state.isLoading = false
        if (payload.length) {
          state.posts = payload
        }
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false
      })
  }
})

// export const {getPosts} = postReducer.actions
export default postReducer.reducer

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const response = await getAPIs.GetPosts()
    return response
  } catch (error) {
    return error
  }
})
