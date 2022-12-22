import {TextField} from '@mui/material'
import {colors} from '../../../assets/colors'

const styles = {
  inputField: {
    '& .Mui-focused': {
      borderColor: `${colors.primary.main} !important`,
    },
  },
}

const Email = ({label, isError, ...field}) => {
  return (
    <TextField
      fullWidth
      {...field}
      label={label}
      error={isError?.message || false}
      size="small"
      sx={styles.inputField}
      type="email"
    />
  )
}

export default Email
