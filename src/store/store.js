import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loaderReducer from './reducers/loader'
import notifyReducer from './reducers/notify'
import postReducer from './reducers/posts'
import authReducer from './reducers/auth'

const reducer = combineReducers({
  posts: postReducer,
  notify: notifyReducer,
  loader: loaderReducer,
  auth: authReducer,
})
const store = configureStore({
  reducer,
})

export default store
