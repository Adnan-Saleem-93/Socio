import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import useAuth from '../custom-hooks/useAuth'
import {Navigate, Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import {useSelector} from 'react-redux'
import Loader from '../common/Loader'

export default function BasicLayout() {
  const isAuthenticated = useAuth()
  const {show: isLoading} = useSelector((state) => state.loader)

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />

      <Sidebar />
      <Box component="main" sx={{flexGrow: 1, backgroundColor: '#edf2f7', minHeight: '100vh'}}>
        {isLoading ? (
          <Loader />
        ) : (
          <Box sx={{p: 2, height: '100%', display: 'flex', justifyContent: 'center'}}>
            {!isAuthenticated ? <Navigate to="/login" /> : <Outlet />}
          </Box>
        )}
      </Box>
    </Box>
  )
}
