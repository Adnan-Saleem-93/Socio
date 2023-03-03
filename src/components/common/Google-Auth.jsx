import {colors} from '../../assets/colors'
import {PrimaryButton} from './Buttons'
import GoogleIcon from '../../assets/images/google.png'
import {useGoogleLogin} from '@react-oauth/google'
import {useDispatch} from 'react-redux'
import {errorMessage} from '../../store/reducers/notify'
import {Typography} from '@mui/material'
import moment from 'moment'
import {authenticateUser} from '../../store/reducers/auth'

const GoogleAuth = ({isLogin = false, renderORSection = false}) => {
  const dispatchAction = useDispatch()
  const GoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatchAction(authenticateUser(tokenResponse))
    },
    onError: (error) => {
      dispatchAction(
        errorMessage({
          title: `Failed to ${isLogin ? 'Login' : 'Sign Up'} with Google`,
          message: error?.message || error || 'Please Try Again',
        })
      )
    },
  })
  return (
    <>
      {renderORSection && (
        <Typography
          sx={{
            fontSize: '1rem',
            width: '90%',
            textAlign: 'center',
            borderBottom: '1px solid #000',
            lineHeight: '0.1rem',
            margin: '10px 0 20px',
            '& span': {
              background: '#fff',
              padding: '0 10px',
            },
          }}
        >
          <span>OR</span>
        </Typography>
      )}
      <PrimaryButton
        text={` Sign ${isLogin ? 'In' : 'Up'} With Google`}
        customStyle={{width: '90%', marginY: '1rem'}}
        bgColor={colors.primary.hover}
        onClick={() => GoogleLogin()}
        icon={
          <img
            src={GoogleIcon}
            alt="Google logo"
            height={20}
            width={20}
            style={{margin: '0 0.5rem'}}
          />
        }
      />
    </>
  )
}

export default GoogleAuth
