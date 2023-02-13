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
  },
  // {
  //   name: 'gender',
  //   label: 'Gender',
  //   type: FormTypes.RADIO,
  //   radioOptions: [
  //     {
  //       name: 'male',
  //       label: 'Male',
  //       value: 'male',
  //     },
  //     {
  //       name: 'female',
  //       label: 'Female',
  //       value: 'female',
  //     },
  //   ],
  // },
]

const [first_name, last_name, email, password, confirm_password] = form

export const initialValues = {
  [first_name.name]: '',
  [last_name.name]: '',
  [email.name]: '',
  [password.name]: '',
  [confirm_password.name]: '',
  // [gender.name]: 'male',
}

export const validations = Yup.object().shape({
  [first_name.name]: Yup.string().required(first_name.error),
  [last_name.name]: Yup.string().required(last_name.error),
  [email.name]: Yup.string().required(email.error),
  [password.name]: Yup.string().required(password.error),
  [confirm_password.name]: Yup.string().required(confirm_password.error),
  // [gender.name]: Yup.string(),
})
