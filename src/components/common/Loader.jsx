import {Box, CircularProgress} from '@mui/material'

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
      }}
    >
      {' '}
      <CircularProgress color="primary" size={120} />
    </Box>
  )
}
