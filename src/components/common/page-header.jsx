import {Typography} from '@mui/material'
import {colors} from '../../assets/colors'

const styles = {
  pageHeader: {
    color: colors.primary.main
  }
}

export default function PageHeader({text = '', variant = 'h4'}) {
  return (
    <Typography variant={variant} sx={styles.pageHeader}>
      {text}
    </Typography>
  )
}
