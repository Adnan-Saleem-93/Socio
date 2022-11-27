import {api} from './axios-config'
import {URLs} from './constants'

export const postAPIs = {
  CreatePost: async ({body}) => {
    const response = await api.post(URLs.CREATE_POST, body)
    return response?.data || null
  }
}
