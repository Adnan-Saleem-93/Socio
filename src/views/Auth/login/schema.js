import * as Yup from 'yup'
import {FormTypes} from '../../../utils/constants.js'

export const form = [
  {
    name: 'usernameOrEmail',
    label: 'Username/Email',
    type: FormTypes.EMAIL,
    error: 'Username or Email Address is required.'
  },
  {
    name: 'password',
    label: 'Password',
    type: FormTypes.PASSWORD,
    error: 'Password is required.'
  }
]

const [usernameOrEmail, password] = form

export const initialValues = {
  [usernameOrEmail.name]: '',
  [password.name]: ''
}

export const validations = Yup.object().shape({
  [usernameOrEmail.name]: Yup.string().required(usernameOrEmail.error),
  [password.name]: Yup.string().required(password.error)
})
