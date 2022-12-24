import {Box} from '@mui/material'
import {Navigate, Outlet} from 'react-router-dom'
import Navbar from '../Navbar'

const BasicLayout = () => {
  const auth = localStorage.getItem('auth') ? true : false

  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: '1rem',
          maxHeight: '100vh',
        }}
      >
        {!auth ? <Navigate to="/login" /> : <Outlet />}
      </Box>
    </>
  )
}

export default BasicLayout
