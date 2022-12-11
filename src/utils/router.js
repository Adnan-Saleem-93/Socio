import {createBrowserRouter} from 'react-router-dom'
import BasicLayout from '../components/layouts/BasicLayout'
import ErrorPage from '../views/ErrorPage'
import Posts from '../views/Posts'
import CreatePost from '../views/Posts/create-post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/create-post',
        element: <CreatePost />
      }
    ]
  }
])

export default router
