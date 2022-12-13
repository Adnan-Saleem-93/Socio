import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'
import {authBG} from '../../assets/backgrounds'

const AuthLayout = () => {
  return (
    <>
      <Box
        sx={{
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw',
          backgroundImage: `url("${authBG}")`
        }}
        id="auth-page-layout"
      >
        <Outlet />
      </Box>
    </>
  )
}

export default AuthLayout
