import {Box} from '@mui/material'
import Navbar from '../Navbar'

const BasicLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: '1rem',
          maxHeight: '100vh'
        }}
      >
        {children}
      </Box>
    </>
  )
}

export default BasicLayout
