import {Snackbar} from '@mui/material'
import {useDispatch} from 'react-redux'
import {hideMessage} from '../../store/reducers/notify'

export default function Notify() {
  const dispatchAction = useDispatch()

  const handleClose = () => {
    dispatchAction(hideMessage())
  }

  return (
    <Snackbar
      anchorOrigin={('top', 'right')}
      open={true}
      onClose={handleClose}
      message="I love snacks"
      key={'top-right'}
    />
  )
}
