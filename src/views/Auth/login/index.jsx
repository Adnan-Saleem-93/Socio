import {Checkbox, FormControlLabel, Typography} from '@mui/material'
import {useState} from 'react'
import {useForm, useWatch} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {colors} from '../../../assets/colors'
import ReactHookForm from '../../../components/common/Form/React-Hook-Form'
import {setRememberMeDetails} from '../../../store/reducers/auth'
import {form, initialValues, validations} from './schema'
import withGoogleAuthProvider from '../../../components/higher-order-components/GoogleAuthProvider'
import GoogleAuth from '../../../components/common/Form/Google-Auth'
import {onSubmit} from './model'
import LoginSignupRedirect from '../../../components/common/Login-Signup-Redirect'

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

const Login = () => {
  const dispatchAction = useDispatch()
  const [rememberMe, setRememberMe] = useState(false)

  const {control} = useForm()
  const email = useWatch({control, name: 'email'})
  const password = useWatch({control, name: 'password'})
  const [isLoading, setIsLoading] = useState(false)

  const renderRememberMe = () => {
    return (
      <FormControlLabel
        control={<Checkbox checked={rememberMe} onClick={() => setRememberMe(!rememberMe)} />}
        label="Remember Me"
      />
    )
  }

  const handleRememberMe = () => {
    if (rememberMe) {
      dispatchAction(setRememberMeDetails({email, password}))
    }
  }

  return (
    <>
      <Typography sx={{color: colors.primary.main, fontWeight: 800}} variant="h5">
        Log In To Your Account
      </Typography>
      <ReactHookForm
        initialValues={initialValues}
        validations={validations}
        form={form}
        submitForm={(values) => onSubmit(values, dispatchAction, setIsLoading, handleRememberMe)}
        buttons={buttons}
        renderRememberMe={renderRememberMe}
        customStyles={{alignItems: 'flex-start'}}
        btnLoading={isLoading}
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
