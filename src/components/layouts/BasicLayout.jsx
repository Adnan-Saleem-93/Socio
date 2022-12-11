import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar'

const BasicLayout = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: '1rem',
          maxHeight: '100vh'
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default BasicLayout
