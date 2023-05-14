import {Box, Typography} from '@mui/material'
import {colors} from '../../assets/colors'
import NotFoundImage from '../../assets/images/not-found.jpg'
import {columnStartAlignedFlexbox, justifyCenterFlexboxRow} from '../../utils/constants'

const styles = {
  firstBox: {
    ...justifyCenterFlexboxRow,
    flexDirection: 'column',
  },
  image: {
    width: '25rem',
    height: '20rem',
  },
  secondBox: {
    ...columnStartAlignedFlexbox,
  },
  header: {
    color: colors.error.main,
    fontWeight: 600,
  },
  description: {
    fontWeight: 500,
    color: colors.dark.main,
  },
}

const DataNotFound = () => {
  return (
    <Box sx={styles.firstBox}>
      <img src={NotFoundImage} alt="data-not-found" style={styles.image} />
      <Box sx={styles.secondBox}>
        <Typography variant="h4" sx={styles.header}>
          Oops...
        </Typography>
        <Typography sx={styles.description}>No Record Found</Typography>
      </Box>
    </Box>
  )
}

export default DataNotFound
