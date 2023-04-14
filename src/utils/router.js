import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from '../components/layouts/AuthLayout'
import BasicLayout from '../components/layouts/BasicLayout'
import Login from '../views/Auth/login'
import SignUp from '../views/Auth/sign-up'
import ErrorPage from '../views/ErrorPage'
import Posts from '../views/Posts'
import CreatePost from '../views/Posts/create-post'
import ProfileSettings from '../views/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: <BasicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
      {
        path: '/create-post',
        element: <CreatePost />,
      },
      {
        path: '/profile-settings',
        element: <ProfileSettings />,
      },
    ],
  },
])

export default router
