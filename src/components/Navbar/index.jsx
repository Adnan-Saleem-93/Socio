import {Typography} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {CommonTexts} from '../../utils/constants'
import {colors} from '../../assets/colors'
import ProfileMenu from '../common/Profile-Menu'

const styles = {
  gridContainer: {
    padding: '12px',
    borderBottom: '1px solid #000',
    width: '100%',
    margin: 0,
    flexGrow: 1,
    alignItems: 'center'
  },
  gridItem: {
    padding: 0
  },

  homeLink: {
    color: colors.dark.main,
    cursor: 'pointer',
    fontWeight: 700,
    '&:hover': {
      // transform: scale(1.1),
    }
  }
}

const Navbar = () => {
  return (
    <Grid container spacing={2} sx={styles.gridContainer}>
      <Grid xs={3} sx={styles.gridItem}>
        <Typography variant="h5" sx={styles.homeLink}>
          {CommonTexts.APP_HEADER}
        </Typography>
      </Grid>
      <Grid xs={3} xsOffset={6} sx={styles.gridItem}>
        <ProfileMenu />
      </Grid>
    </Grid>
  )
}

export default Navbar
