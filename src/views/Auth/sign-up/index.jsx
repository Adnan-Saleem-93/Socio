import {Avatar, Button, Typography} from '@mui/material'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../../assets/colors'
import ReactHookForm from '../../../components/common/React-Hook-Form'
import {errorMessage} from '../../../store/reducers/notify'
import {form, initialValues, validations} from './schema'
import LoginAvatar from '../../../assets/images/profile-avatar.jpg'

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

  const onSubmit = async (values) => {
    try {
      console.log(values)
    } catch (error) {
      dispatchAction(
        errorMessage({title: 'Failed to Create Post', message: error?.response?.message})
      )
    }
  }

  return (
    <>
      <Avatar alt="Sign-in Avatar" src={LoginAvatar} sx={{width: 70, height: 70}} />
      <Typography sx={{color: colors.primary.main, fontWeight: 800}} variant="h5">
        Sign Up
      </Typography>
      <ReactHookForm
        initialValues={initialValues}
        validations={validations}
        form={form}
        submitForm={onSubmit}
        buttons={buttons}
      />
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

export default SignUp
