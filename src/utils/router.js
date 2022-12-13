import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from '../components/layouts/AuthLayout'
import BasicLayout from '../components/layouts/BasicLayout'
import Login from '../views/Auth/login'
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
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

export default router
