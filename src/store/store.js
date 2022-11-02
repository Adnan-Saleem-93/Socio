import {combineReducers, configureStore} from '@reduxjs/toolkit'
import postReducer from './reducers/posts'

const reducer = combineReducers({
  posts: postReducer
})
const store = configureStore({
  reducer
})

export default store
