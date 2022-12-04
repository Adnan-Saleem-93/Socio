import {Box} from '@mui/material'

const BasicLayout = ({children}) => {
  return (
    <Box
      sx={{
        margin: '1rem',
        maxHeight: '100vh'
      }}
    >
      {children}
    </Box>
  )
}

export default BasicLayout
