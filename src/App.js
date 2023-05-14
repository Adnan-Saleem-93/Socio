import Notify from './components/common/Notify'
import {RouterProvider} from 'react-router-dom'
import router from './utils/router'
import {api} from './utils/axios-config'
import {useSelector} from 'react-redux'

const App = () => {
  const {token, expiry} = useSelector((state) => state.auth)

  api.interceptors.request.use(
    async (config) => {
      if (token) {
        if (new Date(expiry) > new Date()) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  return (
    <>
      <RouterProvider router={router} />
      <Notify />
    </>
  )
}

export default App
