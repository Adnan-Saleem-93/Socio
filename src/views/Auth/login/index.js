import {yupResolver} from '@hookform/resolvers/yup'
import {Box, Button, TextField, Typography} from '@mui/material'
import {Controller, useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../../assets/colors'
import IconifyIcon from '../../../components/common/Iconify-Icon'
import {errorMessage} from '../../../store/reducers/notify'
import {centerAlignItem, FormTypes, Icons} from '../../../utils/constants'
import {form, initialValues, validations} from './schema'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    width: '100%'
  },
  inputBox: {
    margin: '1rem'
  },
  inputField: {
    '& .Mui-focused': {
      borderColor: `${colors.primary.main} !important`
    }
  },
  buttonsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem'
  },
  button: {
    // width: '100%'
  }
}

const Login = () => {
  const navigate = useNavigate()
  const buttons = [
    {
      text: 'Create',
      variant: 'contained',
      type: 'submit',
      onClick: null,
      customStyles: {
        backgroundColor: `${colors.primary.main} !important`,
        '&:hover': {
          backgroundColor: `${colors.primary.hover} !important`
        }
      }
    }
  ]

  const dispatchAction = useDispatch()
  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(validations),
    reValidateMode: 'onChange',
    defaultValues: initialValues
  })

  const onSubmit = async (values) => {
    try {
      console.log(values)
    } catch (error) {
      dispatchAction(
        errorMessage({title: 'Failed to Create Post', message: error?.response?.message})
      )
    }
  }

  const renderForm = () => {
    return form.map((item) => {
      const {name, type, label} = item
      const value = initialValues[name]
      const isError = errors[name]
      return (
        <Box sx={styles.inputBox}>
          <Controller
            name={name}
            control={control}
            defaultValue={value}
            render={({field}) => {
              return type === FormTypes.TEXT ||
                type === FormTypes.PASSWORD ||
                type === FormTypes.EMAIL ? (
                <TextField
                  fullWidth
                  {...field}
                  label={label}
                  error={isError?.message || false}
                  size="small"
                  sx={styles.inputField}
                  type={type}
                />
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
              {text}
            </Button>
          )
        })}
      </Box>
    )
  }

  return (
    <Box sx={{...centerAlignItem}}>
      <Box
        sx={{
          ...centerAlignItem,
          background: colors.light.main,
          height: '50%',
          width: '40%',
          borderRadius: 3
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {renderForm()}
            {renderButtons()}
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login
