import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'
import {authBG} from '../../assets/backgrounds'
import {colors} from '../../assets/colors'
import {centerAlignItem} from '../../utils/constants'

const AuthLayout = () => {
  return (
    <>
      <Box
        sx={{
          maxHeight: '100vh',
          height: '100vh',
          width: '100vw',
          backgroundImage: `url("${authBG}")`,
        }}
      >
        <Box sx={{...centerAlignItem}}>
          <Box
            sx={{
              ...centerAlignItem,
              flexDirection: 'column',
              background: colors.light.main,
              height: 'max-content',
              maxHeight: '75%',
              width: {xs: '80%', sm: '60%', md: '30%'},
              borderRadius: 3,
              padding: '1rem',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AuthLayout
