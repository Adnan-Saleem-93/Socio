import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loaderReducer from './reducers/loader'
import notifyReducer from './reducers/notify'
import postReducer from './reducers/posts'

const reducer = combineReducers({
  posts: postReducer,
  notify: notifyReducer,
  loader: loaderReducer
})
const store = configureStore({
  reducer
})

export default store
