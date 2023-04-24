import Notify from './components/common/Notify'
import {RouterProvider} from 'react-router-dom'
import router from './utils/router'
import {Fab} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import IconifyIcon from './components/common/Iconify-Icon'
import {Icons} from './utils/constants'
import {colors} from './assets/colors'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Notify />
      <Fab
        title="Chat"
        color="primary"
        aria-label="chat"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
      >
        <IconifyIcon icon={Icons.CHAT} color={colors.light.main} />
      </Fab>
    </>
  )
}

export default App
