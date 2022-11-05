import * as Yup from 'yup'
import {FormTypes} from '../../utils/constants'

export const form = [
  {
    name: 'title',
    label: 'Title',
    type: FormTypes.TEXT,
    error: 'Title is required.'
  },
  {
    name: 'message',
    label: 'Message',
    type: FormTypes.TEXT,
    error: 'Message is required.'
  },
  {
    name: 'author',
    label: 'Author',
    type: FormTypes.TEXT
  },
  {
    name: 'tags',
    label: 'Tags',
    type: FormTypes.TEXT
  },
  {
    name: 'selectedFile',
    label: 'File',
    type: FormTypes.FILE
  }
]

const [title, message, author, tags, selectedFile] = form

export const initialValues = {
  [title.name]: '',
  [message.name]: '',
  [author.name]: '',
  [tags.name]: '',
  [selectedFile.name]: ''
}

export const validations = Yup.object().shape({
  [title.name]: Yup.string().required(title.error),
  [message.name]: Yup.string().required(message.error),
  [author.name]: Yup.string(),
  [tags.name]: Yup.string(),
  [selectedFile.name]: Yup.string()
})
