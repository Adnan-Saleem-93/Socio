import {Button, Checkbox, FormControlLabel, Typography} from '@mui/material'
import {useCallback} from 'react'
import {useEffect, useState} from 'react'
import {useForm, useWatch} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../../assets/colors'
import ReactHookForm from '../../../components/common/React-Hook-Form'
import {setRememberMeDetails} from '../../../store/reducers/auth'
import {errorMessage} from '../../../store/reducers/notify'
import {form, initialValues, validations} from './schema'

const Login = () => {
  const navigate = useNavigate()
  const dispatchAction = useDispatch()
  const buttons = [
    {
      text: 'Log In',
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
  ]
  const [rememberMe, setRememberMe] = useState(false)

  const {control} = useForm()
  const usernameOrEmail = useWatch({control, name: 'usernameOrEmail'})
  const password = useWatch({control, name: 'password'})

  const onSubmit = async (values) => {
    try {
      console.log(values)
    } catch (error) {
      dispatchAction(
        errorMessage({title: 'Failed to Create Post', message: error?.response?.message})
      )
    }
  }

  const renderRememberMe = () => {
    return (
      <FormControlLabel
        control={<Checkbox checked={rememberMe} onClick={() => setRememberMe(!rememberMe)} />}
        label="Remember Me"
      />
    )
  }

  const handleRememberMe = useCallback(() => {
    if (rememberMe) {
      dispatchAction(setRememberMeDetails({usernameOrEmail, password}))
    }
  }, [rememberMe])

  useEffect(() => {
    handleRememberMe()
  }, [handleRememberMe])

  return (
    <>
      <ReactHookForm
        initialValues={initialValues}
        validations={validations}
        form={form}
        submitForm={onSubmit}
        buttons={buttons}
        renderRememberMe={renderRememberMe}
        customStyles={{alignItems: 'flex-start'}}
        control={control}
      />
      <Typography
        sx={{
          fontSize: '1rem',
        }}
      >
        Or{' '}
        <Button
          sx={{
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            color: colors.primary[500],
            padding: 0,
            '&:hover': {
              color: colors.primary.main,
              background: colors.light.main,
            },
          }}
          onClick={() => navigate('/sign-up')}
        >
          Create a New Account
        </Button>
      </Typography>
    </>
  )
}

export default Login
