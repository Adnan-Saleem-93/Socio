import * as Yup from 'yup'
import {FormTypes} from '../../../utils/constants.js'

export const form = [
  {
    name: 'first_name',
    label: 'First Name',
    type: FormTypes.TEXT,
    error: 'First Name is required.',
  },
  {
    name: 'last_name',
    label: 'Last Name',
    type: FormTypes.TEXT,
    error: 'Last Name is required.',
  },
  {
    name: 'email',
    label: 'Email',
    type: FormTypes.EMAIL,
    error: 'Email Address is required.',
    invalidMsg: 'Email Address is Invalid.',
  },
  {
    name: 'password',
    label: 'Password',
    type: FormTypes.PASSWORD,
    error: 'Password is required.',
  },
  {
    name: 'confirm_password',
    label: 'Confirm Password',
    type: FormTypes.PASSWORD,
    error: 'Confirm Password is required.',
    mismatchError: 'Passwords do not match.',
  },
]

const [first_name, last_name, email, password, confirm_password] = form

export const initialValues = {
  [first_name.name]: '',
  [last_name.name]: '',
  [email.name]: '',
  [password.name]: '',
  [confirm_password.name]: '',
}

export const validations = Yup.object().shape({
  [first_name.name]: Yup.string().required(first_name.error),
  [last_name.name]: Yup.string().required(last_name.error),
  [email.name]: Yup.string().required(email.error).email(email.invalidMsg),
  [password.name]: Yup.string()
    .required(password.errorMsg)
    .matches(
      '(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$',
      'Password must contain: 7+ characters, 1 upper case, 1 lower case, 1 numeric value and 1 special character with no space'
    ),
  [confirm_password.name]: Yup.string()
    .required(confirm_password.error)
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], confirm_password.mismatchError),
    }),
})
