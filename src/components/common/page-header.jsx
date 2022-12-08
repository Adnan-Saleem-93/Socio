import {Box, Typography} from '@mui/material'
import {colors} from '../../assets/colors'

const styles = {
  pageHeader: {
    color: colors.error.main,
    textTransform: 'uppercase',
    fontWeight: 700
  }
}

export default function PageHeader({text = '', variant = 'h4', button = null}) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant={variant} sx={styles.pageHeader}>
        {text}
      </Typography>
      {button && button}
    </Box>
  )
}
