import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {TextField, Paper, Typography, Box, Tooltip, Button} from '@mui/material'

import {form, initialValues, validations} from './schema'
import {FormTypes} from '../../utils/constants'
import FormLayout from '../layouts/FormLayout'
import {colors} from './../../assets/colors'

import '../../assets/custom-css/form.css'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    width: '50vw'
  },
  inputBox: {
    margin: '1rem'
  },
  pageHeader: {
    margin: '1rem',
    color: colors.dark.main
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
      onClick: null
    },
    {
      text: 'Cancel',
      variant: 'outlined',
      type: 'button',
      onClick: null
    }
  ]

  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(validations),
    reValidateMode: 'onChange',
    defaultValues: initialValues
  })

  const renderForm = () => {
    return form.map((item, index) => {
      const {name, type, label, error} = item
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
                <Tooltip open={isError ? error : null} title={error} arrow placement="right">
                  <TextField fullWidth {...field} label={label} error={isError} />
                </Tooltip>
              ) : null
            }}
          />
        </Box>
      )
    })
  }

  const renderButtons = () => {
    return (
      <Box sx={styles.buttonsBox}>
        {buttons.map((button, index) => {
          const {text, variant, type, onClick} = button
          return (
            <Button variant={variant} sx={styles.button} type={type} onClick={onClick && onClick}>
              {text}
            </Button>
          )
        })}
      </Box>
    )
  }

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <FormLayout>
        <Typography variant="h4" sx={styles.pageHeader}>
          Create New Post
        </Typography>
        <Paper variant="outlined" sx={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderForm()}
            {renderButtons()}
          </form>
        </Paper>
      </FormLayout>
    </>
  )
}

export default Forms
