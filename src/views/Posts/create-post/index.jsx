import {useForm, Controller, useWatch} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {TextField, Paper, Typography, Box, Button, CircularProgress} from '@mui/material'

import {form, initialValues, validations} from './schema'
import {FormTypes} from '../../../utils/constants'
import FormLayout from '../../../components/layouts/FormLayout'
import {colors} from '../../../assets/colors'

import '../../../assets/custom-css/form.css'
import IconifyIcon from '../../../components/common/Iconify-Icon'
import FileInput from '../../../components/common/File-Input'
import {centerAlignItem} from '../../../utils/constants'
import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/page-header'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    width: {md: '45%', sm: '65%', xs: '100%'},
    borderColor: colors.dark.main
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
    width: '45%'
  }
}

const Forms = () => {
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
    },
    {
      text: 'Cancel',
      variant: 'outlined',
      type: 'button',
      onClick: null,
      customStyles: {
        color: `${colors.primary.main} !important`,
        borderColor: `${colors.primary.main} !important`,
        '&:hover': {
          color: `${colors.primary.hover} !important`,
          borderColor: `${colors.primary.hover} !important`
        }
      }
    }
  ]

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(validations),
    reValidateMode: 'onChange',
    defaultValues: initialValues
  })

  const selectedFile = useWatch({control, name: 'selectedFile'})
  const [fileDataURL, setFileDataURL] = useState(null)
  const [isImageLoading, setIsImageLoading] = useState(false)

  useEffect(() => {
    let fileReader,
      isCancel = false
    if (selectedFile) {
      fileReader = new FileReader()
      generateImagePreviewURL(fileReader, isCancel)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
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
              ) : null
            }}
          />
          {isError?.message && (
            <Box display="flex" alignItems="center">
              <IconifyIcon
                icon="material-symbols:error-circle-rounded"
                color={colors.error.main}
                height={18}
                width={18}
              />
              <Typography color={colors.error.main} variant="caption">
                {isError.message}
              </Typography>
            </Box>
          )}
        </Box>
      )
    })
  }
  const generateImagePreviewURL = (fileReader, isCancel) => {
    try {
      setIsImageLoading(true)
      fileReader.onload = (e) => {
        const {result} = e.target
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(selectedFile)
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
          <img src={`${fileDataURL}`} width="100%" height="100%" alt={selectedFile.name} />
        ) : (
          <Typography variant="h5">No File Selected</Typography>
        )}
      </Box>
    )
  }

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <FormLayout>
        <PageHeader text="Create New Post" />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Paper variant="outlined" sx={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {renderForm()}
              {renderButtons()}
            </form>
          </Paper>
          <Paper variant="outlined" sx={styles.form}>
            {renderSelectedFile()}
          </Paper>
        </Box>
      </FormLayout>
    </>
  )
}

export default Forms
