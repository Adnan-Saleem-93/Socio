import axios from 'axios'
import {URLs} from './constants'

export const api = axios.create({
  baseURL: URLs.BASE_URL,
})
