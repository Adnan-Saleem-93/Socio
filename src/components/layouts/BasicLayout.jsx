import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import useAuth from '../custom-hooks/useAuth'
import {Navigate, Outlet} from 'react-router-dom'
import Sidebar from '../Sidebar'
import {AppBar, Toolbar, Typography} from '@mui/material'
import {colors} from '../../assets/colors'

const AppBarComponent = () => {
  return (
    <Box
      sx={{
        background: colors.light.main,
        boxShadow: 'none',
        borderBottom: `1px solid #0000001f`,
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{color: colors.primary.main, fontWeight: 700}}
        >
          Posts
        </Typography>
      </Toolbar>
    </Box>
  )
}

export default function BasicLayout() {
  const isAuthenticated = useAuth()

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />

      <Sidebar />
      <Box component="main" sx={{flexGrow: 1, backgroundColor: '#edf2f7', height: '100vh'}}>
        <AppBarComponent />
        <Box sx={{p: 2}}>{!isAuthenticated ? <Navigate to="/login" /> : <Outlet />}</Box>
      </Box>
    </Box>
  )
}
