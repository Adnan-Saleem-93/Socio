import {useSelector} from 'react-redux'
import Loader from './components/common/Loader'
import Notify from './components/common/Notify'
import {RouterProvider} from 'react-router-dom'
import router from './utils/router'

const App = () => {
  const {show: showLoader} = useSelector((state) => state.loader)

  if (showLoader) {
    return <Loader />
  }
  return (
    <>
      <RouterProvider router={router} />
      <Notify />
    </>
  )
}

export default App
