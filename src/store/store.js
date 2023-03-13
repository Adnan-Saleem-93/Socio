import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loaderReducer from './reducers/loader'
import notifyReducer from './reducers/notify'
import postReducer from './reducers/posts'
import authReducer from './reducers/auth'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage,
}

const reducer = combineReducers({
  posts: postReducer,
  notify: notifyReducer,
  loader: loaderReducer,
  auth: persistReducer(authPersistConfig, authReducer),
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
