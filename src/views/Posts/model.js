import storage from '../../utils/firebaseConfig'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {errorMessage, successMessage} from '../../store/reducers/notify'
import {deleteAPIs, postAPIs, putAPIs} from '../../utils/api'
import {parseJWT} from '../../utils/general-methods'
import {setPosts} from '../../store/reducers/posts'
import {startLoading, stopLoading} from '../../store/reducers/loader'

export const preSubmit = async (selectedFile, dispatchAction) => {
  let fileUpload = await uploadFileToFirebase(selectedFile.file, dispatchAction)
  return fileUpload
}

export const onSubmit = async (values, dispatchAction, navigate, token) => {
  try {
    let decodedToken = parseJWT(token)
    let body = {...values, author: decodedToken?.name}
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

export const handleLikeClick = async ({id, likedBy, dispatchAction}) => {
  try {
    const response = await putAPIs.LikePost(id)
    if (response) {
    }
  } catch (error) {
    dispatchAction(errorMessage({title: 'Failed to like post', message: error}))
  }
}
export const handleDeleteClick = async (id, dispatchAction) => {
  try {
    dispatchAction(startLoading())
    const response = await deleteAPIs.DeletePost(id)
    if (response) {
      dispatchAction(setPosts(response))
    }
  } catch (error) {
    dispatchAction(errorMessage({title: 'Failed to delete post', message: error}))
  } finally {
    dispatchAction(stopLoading())
  }
}
