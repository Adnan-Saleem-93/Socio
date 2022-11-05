import {Box} from '@mui/material'

const FormLayout = ({children}) => {
  return (
    <Box
      sx={{
        marginY: '2rem',
        marginX: '1rem',
        maxHeight: '100vh'
      }}
    >
      {children}
    </Box>
  )
}

export default FormLayout
