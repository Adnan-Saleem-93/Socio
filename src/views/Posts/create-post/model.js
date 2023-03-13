import storage from '../../../utils/firebaseConfig'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {errorMessage, successMessage} from '../../../store/reducers/notify'
import {postAPIs} from '../../../utils/api'

export const preSubmit = async (selectedFile, dispatchAction) => {
  let fileUpload = await uploadFileToFirebase(selectedFile.file, dispatchAction)
  return fileUpload
}

export const onSubmit = async (values, dispatchAction, navigate) => {
  try {
    let body = {...values}

    const response = await postAPIs.CreatePost({body})
    if (response) {
      dispatchAction(successMessage({title: 'Success!', message: 'Post Created Successfully'}))
      navigate('/posts')
    }
  } catch (error) {
    dispatchAction(
      errorMessage({title: 'Failed to Create Post', message: error?.response?.message})
    )
  }
}

export const uploadFileToFirebase = async (selectedFile, dispatchAction) => {
  if (selectedFile) {
    // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the selectedFile to upload.
    const storageRef = ref(storage, `/${selectedFile.name}`)

    try {
      await uploadBytesResumable(storageRef, selectedFile)
      return await getDownloadURL(storageRef)
    } catch (err) {
      dispatchAction(errorMessage('Failed to Upload Firebase storage!'))
    }
  }
}
