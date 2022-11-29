import {useSelector} from 'react-redux'

import toast, {Toaster} from 'react-hot-toast'

export default function Notify() {
  const {timeOut, open, type, message} = useSelector((state) => state.notify)

  if (open) {
    toast[type](message, {
      duration: timeOut
    })
  }

  return <Toaster position="top-right" />
}
