import {GoogleOAuthProvider} from '@react-oauth/google'

const withGoogleAuthProvider =
  (Component) =>
  (...props) =>
    (
      <GoogleOAuthProvider clientId="950537498426-4l5t6op2uglbdanpmt56jal68616dldu.apps.googleusercontent.com">
        <Component {...props} />
      </GoogleOAuthProvider>
    )

export default withGoogleAuthProvider
