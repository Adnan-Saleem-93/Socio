import {authenticateUserWithEmail} from '../../../store/reducers/auth'
import {errorMessage} from '../../../store/reducers/notify'
import {postAPIs} from '../../../utils/api'

export const onSubmit = async (values, dispatchAction, setIsLoading, callback) => {
  try {
    setIsLoading(true)
    let body = {...values}

    const response = await postAPIs.Login({body})
    if (response) {
      dispatchAction(authenticateUserWithEmail(response.token))
      callback && callback()
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
          'Login Failed.!',
      })
    )
  } finally {
    setIsLoading(false)
  }
}
