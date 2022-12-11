import {Box, Typography} from '@mui/material'
import {useRouteError} from 'react-router-dom'
import {colors} from '../assets/colors'
import {columnStartAlignedFlexbox, justifyCenterFlexboxRow} from '../utils/constants'

const styles = {
  firstBox: {
    ...justifyCenterFlexboxRow,
    height: '90vh'
  },
  secondBox: {
    ...columnStartAlignedFlexbox,
    alignItems: 'center'
  },
  header: {
    color: colors.error.main,
    fontWeight: 600,
    margin: '1rem'
  },
  description: {
    fontWeight: 900,
    margin: '1rem',
    color: colors.dark.main
  }
}

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <Box sx={styles.firstBox}>
      <Box sx={styles.secondBox}>
        <Typography variant="h2" sx={styles.header}>
          Oops...
        </Typography>
        <Typography variant="h4">Sorry, an unexpected error has occurred.</Typography>
        <Typography variant="h5" sx={styles.description}>
          {error.statusText || error.message}
        </Typography>
      </Box>
    </Box>
  )
}

export default ErrorPage
