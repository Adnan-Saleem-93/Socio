import {Box} from '@mui/material'

const FormLayout = ({children}) => {
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

export default FormLayout
