import {Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {colors} from '../../../assets/colors'
import ReactHookForm from '../../../components/common/Form/React-Hook-Form'
import {form, initialValues, validations} from './schema'
import withGoogleAuthProvider from '../../../components/higher-order-components/GoogleAuthProvider'
import {onSubmit} from './model'
import GoogleAuth from '../../../components/common/Form/Google-Auth'
import LoginSignupRedirect from '../../../components/common/Login-Signup-Redirect'
import {useState} from 'react'

const SignUp = () => {
  const buttons = [
    {
      text: 'Register',
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

  const [isLoading, setIsLoading] = useState(false)

  const dispatchAction = useDispatch()

  return (
    <>
      <Typography sx={{color: colors.primary.main, fontWeight: 800}} variant="h5">
        Create A New Acoount
      </Typography>
      <ReactHookForm
        initialValues={initialValues}
        validations={validations}
        form={form}
        submitForm={(values) => onSubmit(values, dispatchAction, setIsLoading)}
        buttons={buttons}
        btnLoading={isLoading}
      />
      <GoogleAuth isLogin={false} renderORSection={true} />
      <LoginSignupRedirect
        question="Already have an account?"
        btnText="Log In"
        redirectTo="/login"
      />
    </>
  )
}

export default withGoogleAuthProvider(SignUp)
