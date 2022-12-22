import {Button, Typography} from '@mui/material'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {colors} from '../../../assets/colors'
import ReactHookForm from '../../../components/common/React-Hook-Form'
import {errorMessage} from '../../../store/reducers/notify'
import {form, initialValues, validations} from './schema'

const Login = () => {
  const navigate = useNavigate()
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
      <Typography>
        Don't have an account?{' '}
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
          onClick={() => navigate('/sign-up')}
        >
          Sign Up
        </Button>
      </Typography>
      <ReactHookForm
        initialValues={initialValues}
        validations={validations}
        form={form}
        submitForm={onSubmit}
        buttons={buttons}
      />
    </>
  )
}

export default Login
