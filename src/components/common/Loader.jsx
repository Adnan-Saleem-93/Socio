import {Box, CircularProgress} from '@mui/material'
import {colors} from '../../assets/colors'

export const ButtonSpinner = ({size = 26}) => {
  return <CircularProgress size={size} sx={{color: colors.light.main}} />
}

export default function Loader({size = 120}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 98px)',
        maxhHeight: '75vh',
        margin: 0,
      }}
    >
      <CircularProgress color="primary" size={size} />
    </Box>
  )
}
