import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import useAuth from '../custom-hooks/useAuth'
import {Navigate, Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'

export default function BasicLayout() {
  const isAuthenticated = useAuth()

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />

      <Sidebar />
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <Box sx={{}}>{!isAuthenticated ? <Navigate to="/login" /> : <Outlet />}</Box>
      </Box>
    </Box>
  )
}
