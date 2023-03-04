import {Box, CircularProgress} from '@mui/material'

export default function Loader({size = 120}) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '70vh',
        maxhHeight: '75vh',
      }}
    >
      <CircularProgress color="primary" size={size} />
    </Box>
  )
}
