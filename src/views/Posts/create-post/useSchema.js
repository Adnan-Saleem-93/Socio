import * as Yup from 'yup'
import {FormTypes} from '../../../utils/constants.js'

const form = [
  {
    name: 'message',
    label: 'Message',
    type: FormTypes.TEXTAREA,
    error: 'Message is required.',
  },
  {
    name: 'tags',
    label: 'Tags',
    type: FormTypes.TEXT,
  },
  {
    name: 'selectedFile',
    label: 'File',
    type: FormTypes.FILE,
  },
]

const [message, tags, selectedFile] = form

const initialValues = {
  [message.name]: '',
  [tags.name]: '',
  [selectedFile.name]: '',
}

const validations = Yup.object().shape({
  [message.name]: Yup.string().required(message.error),
  [tags.name]: Yup.string(),
  [selectedFile.name]: Yup.object().nullable(),
})

export const useSchema = ({isEdit = false}) => {
  return {form, initialValues, validations}
}
