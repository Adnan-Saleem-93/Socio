import {Avatar, Box, Button, Checkbox, Divider, FormControlLabel, Typography} from '@mui/material'
import {useCallback} from 'react'
import {useEffect, useState} from 'react'
import {useForm, useWatch} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../../assets/colors'
import ReactHookForm from '../../../components/common/React-Hook-Form'
import {setRememberMeDetails} from '../../../store/reducers/auth'
import {form, initialValues, validations} from './schema'
import withGoogleAuthProvider from '../../../components/higher-order-components/GoogleAuthProvider'
import GoogleAuth from '../../../components/common/Google-Auth'
import {onSubmit} from './model'
import LoginSignupRedirect from '../../../components/common/Login-Signup-Redirect'

const Login = () => {
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
      <Typography sx={{color: colors.primary.main, fontWeight: 800}} variant="h5">
        Log In To Your Account
      </Typography>
      <ReactHookForm
        initialValues={initialValues}
        validations={validations}
        form={form}
        submitForm={(values) => onSubmit(values, dispatchAction)}
        buttons={buttons}
        renderRememberMe={renderRememberMe}
        customStyles={{alignItems: 'flex-start'}}
        control={control}
      />

      <GoogleAuth isLogin={true} renderORSection={true} />
      <LoginSignupRedirect
        question="Don't have an account?"
        btnText="Create a New Account"
        redirectTo="/sign-up"
      />
    </>
  )
}

export default withGoogleAuthProvider(Login)
