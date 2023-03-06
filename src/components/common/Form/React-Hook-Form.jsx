import {yupResolver} from '@hookform/resolvers/yup'
import {Box, Button, Typography} from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import {colors} from '../../../assets/colors'
import Email from './Email'
import Password from './Password'
import Text from './Text'
import IconifyIcon from '../Iconify-Icon'
import {columnCenterAlignedFlexbox, FormTypes, Icons} from '../../../utils/constants'
import {ButtonSpinner} from '../Loader'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    width: '100%',
  },
  inputBox: {
    margin: '0.5rem 0',
    width: '100%',
  },
  inputField: {
    '& .Mui-focused': {
      borderColor: `${colors.primary.main} !important`,
    },
  },
  buttonsBox: {
    margin: '1rem 0',
    width: '100%',
  },
  button: {
    width: '100%',
  },
}

const ReactHookForm = ({
  initialValues = null,
  validations = null,
  form = null,
  submitForm = null,
  buttons = null,
  customRenderButtons = null,
  renderRememberMe = null,
  customStyles = null,
  control = null,
  btnLoading = false,
}) => {
  const {
    control: localControl,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validations),
    reValidateMode: 'onChange',
    defaultValues: initialValues,
  })

  const renderForm = () => {
    return form.map((item) => {
      const {name, type, label} = item
      const value = initialValues[name]
      const isError = errors[name]
      return (
        <Box sx={styles.inputBox}>
          <Controller
            name={name}
            control={control ? control : localControl}
            defaultValue={value}
            render={({field}) => {
              return type === FormTypes.TEXT ? (
                <Text label={label} isError={isError} {...field} />
              ) : type === FormTypes.PASSWORD ? (
                <Password label={label} isError={isError} {...field} />
              ) : type === FormTypes.EMAIL ? (
                <Email label={label} isError={isError} {...field} />
              ) : null
            }}
          />
          {isError?.message && (
            <Box display="flex" alignItems="center">
              <IconifyIcon icon={Icons.ERROR} color={colors.error.main} height={18} width={18} />
              <Typography color={colors.error.main} variant="caption">
                {isError.message}
              </Typography>
            </Box>
          )}
        </Box>
      )
    })
  }

  const renderButtons = () => {
    return (
      <Box sx={styles.buttonsBox}>
        {buttons.map((button) => {
          const {text, variant, type, onClick, customStyles} = button
          return (
            <Button
              variant={variant}
              sx={{...styles.button, ...customStyles}}
              type={type}
              fullWidth={true}
              onClick={onClick && onClick}
            >
              {btnLoading ? <ButtonSpinner /> : text}
            </Button>
          )
        })}
      </Box>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)} style={{width: '100%', padding: '1rem'}}>
        <Box
          sx={{
            ...columnCenterAlignedFlexbox,
            ...customStyles,
          }}
        >
          {renderForm()}
          {renderRememberMe && renderRememberMe()}
          {customRenderButtons ? customRenderButtons() : renderButtons()}
        </Box>
      </form>
    </>
  )
}

export default ReactHookForm
