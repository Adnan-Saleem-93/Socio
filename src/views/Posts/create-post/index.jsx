import {useForm, Controller, useWatch} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {TextField, Paper, Typography, Box, Button, CircularProgress} from '@mui/material'
import {form, initialValues, validations} from './schema'
import {FormTypes, Icons} from '../../../utils/constants'
import {colors} from '../../../assets/colors'
import '../../../assets/custom-css/form.css'
import IconifyIcon from '../../../components/common/Iconify-Icon'
import FileInput from '../../../components/common/Form/File-Input'
import {centerAlignItem} from '../../../utils/constants'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {onSubmit, preSubmit} from '../model'
import TextArea from '../../../components/common/Form/TextArea'
import {errorMessage} from '../../../store/reducers/notify'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: {md: '45%', sm: '65%', xs: '100%'},
    borderColor: colors.dark.main,
  },
  inputBox: {
    margin: '1rem',
  },
  inputField: {
    '& .Mui-focused': {
      borderColor: `${colors.primary.main} !important`,
    },
  },
  buttonsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem',
  },
  button: {
    width: '45%',
  },
}

const CreatePost = () => {
  const {token} = useSelector((state) => state.auth)

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
          backgroundColor: `${colors.primary.hover} !important`,
        },
      },
    },
    {
      text: 'Cancel',
      variant: 'outlined',
      type: 'button',
      onClick: () => navigate('/posts'),
      customStyles: {
        color: `${colors.primary.main} !important`,
        borderColor: `${colors.primary.main} !important`,
        '&:hover': {
          color: `${colors.primary.hover} !important`,
          borderColor: `${colors.primary.hover} !important`,
        },
      },
    },
  ]

  const dispatchAction = useDispatch()
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validations),
    reValidateMode: 'onChange',
    defaultValues: initialValues,
  })

  const selectedFile = useWatch({control, name: 'selectedFile'})

  const [isImageLoading, setIsImageLoading] = useState(false)

  useEffect(() => {
    generateImagePreviewURL()
  }, [selectedFile])

  const renderForm = () => {
    return form.map((item, index) => {
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
              return type === FormTypes.TEXT ? (
                <TextField
                  fullWidth
                  {...field}
                  label={label}
                  error={isError?.message || false}
                  size="small"
                  sx={styles.inputField}
                />
              ) : type === FormTypes.FILE ? (
                <FileInput {...field} setValue={setValue} />
              ) : type === FormTypes.TEXTAREA ? (
                <TextArea label={label} isError={isError} {...field} />
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
  const generateImagePreviewURL = () => {
    try {
      setIsImageLoading(true)
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setIsImageLoading(false)
      }, 1000)
    }
  }
  const renderButtons = () => {
    return (
      <Box sx={styles.buttonsBox}>
        {buttons.map((button, index) => {
          const {text, variant, type, onClick, customStyles} = button
          return (
            <Button
              variant={variant}
              sx={{...styles.button, ...customStyles}}
              type={type}
              onClick={onClick && onClick}
            >
              {text}
            </Button>
          )
        })}
      </Box>
    )
  }
  const renderSelectedFile = () => {
    return (
      <Box sx={{...centerAlignItem}}>
        {isImageLoading ? (
          <CircularProgress size={80} sx={{color: colors.primary.main}} />
        ) : selectedFile ? (
          <img src={`${selectedFile.base64}`} width="100%" height="100%" alt={selectedFile.name} />
        ) : (
          <Typography variant="h5">No File Selected</Typography>
        )}
      </Box>
    )
  }
  const submitHandler = async (values) => {
    try {
      let result = await preSubmit(selectedFile, dispatchAction)
      let updatedValues = {...values}
      if (selectedFile && result) {
        updatedValues = {...updatedValues, selectedFile: result}
      } else {
        updatedValues = {...values, selectedFile: null}
      }
      onSubmit(updatedValues, dispatchAction, navigate, token)
    } catch (err) {
      dispatchAction(errorMessage({title: 'Failed to create post', message: err}))
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit((values) => submitHandler(values))}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Paper variant="outlined" sx={styles.form}>
            {renderForm()}
            {renderButtons()}
          </Paper>
          <Paper variant="outlined" sx={{...styles.form, objectFit: 'cover', maxHeight: '55vh'}}>
            {renderSelectedFile()}
          </Paper>
        </Box>
      </form>
    </>
  )
}

export default CreatePost
