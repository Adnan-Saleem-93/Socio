import {authenticateUserWithEmail} from '../../../store/reducers/auth'
import {errorMessage} from '../../../store/reducers/notify'
import {postAPIs} from '../../../utils/api'

export const onSubmit = async (values, dispatchAction, setIsLoading) => {
  try {
    setIsLoading(true)
    let body = {...values}
    delete body.confirm_password

    const response = await postAPIs.SignUp({body})
    if (response) {
      dispatchAction(authenticateUserWithEmail(response.token))
    }
  } catch (error) {
    dispatchAction(
      errorMessage({
        title:
          error?.response?.data?.error ||
          error?.response?.message ||
          error?.response ||
          error?.message ||
          error ||
          'Failed to Create Account',
      })
    )
  } finally {
    setIsLoading(false)
  }
}
