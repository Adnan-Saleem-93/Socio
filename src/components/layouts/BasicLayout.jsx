import {Box} from '@mui/material'
import {Navigate, Outlet} from 'react-router-dom'
import useAuth from '../custom-hooks/useAuth'
import Navbar from '../Navbar'

const BasicLayout = () => {
  const isAuthenticated = useAuth()

  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: '1rem',
          maxHeight: '100vh',
        }}
      >
        {!isAuthenticated ? <Navigate to="/login" /> : <Outlet />}
      </Box>
    </>
  )
}

export default BasicLayout
