import Forms from './views/Posts/create-post/index'
import Navbar from './components/Navbar'
import {useSelector} from 'react-redux'
import Loader from './components/common/Loader'
import Notify from './components/common/Notify'

const App = () => {
  const {show: showLoader} = useSelector((state) => state.loader)

  if (showLoader) {
    return <Loader />
  }
  return (
    <>
      <Navbar />
      <Forms />
      <Notify />
    </>
  )
}

export default App
