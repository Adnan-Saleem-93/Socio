import {Box} from '@mui/material'
import {Navigate, Outlet} from 'react-router-dom'
import {colors} from '../../assets/colors'
import {centerAlignItem} from '../../utils/constants'
import useAuth from '../custom-hooks/useAuth'
import bgImage from '../../assets/images/auth-vector.jpg'

const AuthLayout = () => {
  const isAuthenticated = useAuth()

  return (
    <>
      <Box
        sx={{
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box sx={{...centerAlignItem, justifyContent: 'space-evenly'}}>
          <img src={bgImage} alt="login" height="50%" width="45%" />
          <Box
            sx={{
              ...centerAlignItem,
              flexDirection: 'column',
              background: colors.light.main,
              border: `2px solid ${colors.border.main}`,
              height: 'auto',
              maxHeight: '100%',
              width: {xs: '90%', sm: '45%'},
              padding: '1rem',
            }}
          >
            {isAuthenticated ? <Navigate to="/posts" /> : <Outlet />}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AuthLayout
