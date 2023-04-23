import {TextField} from '@mui/material'
import {colors} from '../../../assets/colors'

const styles = {
  inputField: {
    '& .Mui-focused': {
      borderColor: `${colors.primary.main} !important`,
    },
  },
}

const TextArea = ({label, isError, ...field}) => {
  return (
    <TextField
      id="outlined-multiline-static"
      multiline
      rows={4}
      fullWidth
      {...field}
      label={label}
      error={isError?.message || false}
      sx={styles.inputField}
    />
  )
}

export default TextArea
