import {colors} from '../../../assets/colors'
import {PrimaryButton} from '../Buttons'
import GoogleIcon from '../../../assets/images/google.png'
import {useGoogleLogin} from '@react-oauth/google'
import {useDispatch} from 'react-redux'
import {errorMessage} from '../../../store/reducers/notify'
import {authenticateUserWithGoogleLogin} from '../../../store/reducers/auth'

const GoogleAuth = ({isLogin = false}) => {
  const dispatchAction = useDispatch()
  const GoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatchAction(authenticateUserWithGoogleLogin(tokenResponse))
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
      <PrimaryButton
        text={`Google`}
        customStyle={{
          width: '90%',
          marginBottom: '0.5rem',
          boxShadow: 'none',
          border: `1px solid ${colors.primary.hover}`,
          hoverColor: colors.light.secondary,
          hoverTextColor: colors.dark.main,
          fontSize: '1rem',
        }}
        bgColor={colors.light.main}
        onClick={() => GoogleLogin()}
        textStyles={{color: colors.primary.hover, fontWeight: 700}}
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
