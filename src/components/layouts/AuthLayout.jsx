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
          backgroundImage: `url("${authBG}")`
        }}
      >
        <Box sx={{...centerAlignItem}}>
          <Box
            sx={{
              ...centerAlignItem,
              flexDirection: 'column',
              background: colors.light.main,
              height: '50%',
              maxHeight: '75%',
              width: '40%',
              borderRadius: 3
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
