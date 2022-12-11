import {createBrowserRouter} from 'react-router-dom'
import Posts from '../views/Posts'
import CreatePost from '../views/Posts/create-post'

const router = createBrowserRouter([
  {
    path: '/posts',
    element: <Posts />
  },
  {
    path: '/create-post',
    element: <CreatePost />
  },
  {path: '/', element: <Posts />}
])

export default router
