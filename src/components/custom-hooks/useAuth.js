import {useSelector} from 'react-redux'

const useAuth = () => {
  const {token, googleAuthToken} = useSelector((state) => state.auth)
  const isTokenExpired = new Date(googleAuthToken?.expires_in) < new Date() ? true : false

  const isGoogleAuthenticated = googleAuthToken?.access_token && !isTokenExpired ? true : false

  return isGoogleAuthenticated || token
}

export default useAuth
