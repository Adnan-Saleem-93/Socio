import {errorMessage} from '../../../store/reducers/notify'

export const onSubmit = async (values, dispatchAction) => {
  try {
    console.log(values)
  } catch (error) {
    dispatchAction(
      errorMessage({title: 'Failed to Create Post', message: error?.response?.message})
    )
  }
}
