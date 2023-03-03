import {Button, Typography} from '@mui/material'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../../assets/colors'
import ReactHookForm from '../../../components/common/React-Hook-Form'
import {errorMessage} from '../../../store/reducers/notify'
import {form, initialValues, validations} from './schema'
import withGoogleAuthProvider from '../../../components/higher-order-components/GoogleAuthProvider'
import {onSubmit} from './model'
import GoogleAuth from '../../../components/common/Google-Auth'

const SignUp = () => {
  const navigate = useNavigate()
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
        submitForm={(values) => onSubmit(values, dispatchAction)}
        buttons={buttons}
      />
      <GoogleAuth isLogin={false} renderORSection={true} />

      <Typography>
        Already have an account?{' '}
        <Button
          sx={{
            textDecoration: 'none',
            fontWeight: 700,
            color: colors.primary[500],
            padding: 0,
            '&:hover': {
              color: colors.primary.main,
              background: colors.light.main,
            },
          }}
          onClick={() => navigate('/login')}
        >
          Log In
        </Button>
      </Typography>
    </>
  )
}

export default withGoogleAuthProvider(SignUp)
