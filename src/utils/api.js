import {api} from './axios-config'
import {endpoints} from './constants'

export const postAPIs = {
  CreatePost: async ({body}) => {
    const response = await api.post(endpoints.CREATE_POST, body)
    return response?.data || null
  }
}
export const getAPIs = {
  GetPosts: async () => {
    const response = await api.get(endpoints.GET_POSTS)
    return response?.data || null
  }
}
