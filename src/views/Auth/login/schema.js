import * as Yup from 'yup'
import {FormTypes} from '../../../utils/constants.js'

export const form = [
  {
    name: 'email',
    label: 'Email',
    type: FormTypes.EMAIL,
    error: 'Email Address is required.',
  },
  {
    name: 'password',
    label: 'Password',
    type: FormTypes.PASSWORD,
    error: 'Password is required.',
  },
]

const [email, password] = form

export const initialValues = {
  [email.name]: '',
  [password.name]: '',
}

export const validations = Yup.object().shape({
  [email.name]: Yup.string().required(email.error),
  [password.name]: Yup.string().required(password.error),
})
