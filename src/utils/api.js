import {api} from './axios-config'
import {endpoints} from './constants'

export const postAPIs = {
  CreatePost: async ({body}) => {
    const response = await api.post(endpoints.Posts.CREATE_POST, body)
    return response?.data || null
  },
  Login: async ({body}) => {
    const response = await api.post(endpoints.Auth.LOG_IN, body)
    return response?.data || null
  },
  SignUp: async ({body}) => {
    const response = await api.post(endpoints.Auth.SIGN_UP, body)
    return response?.data || null
  },
}
export const getAPIs = {
  GetPosts: async () => {
    const response = await api.get(endpoints.Posts.GET_POSTS)
    return response || null
  },
  GetPostById: async () => {
    const response = await api.get(endpoints.Posts.GET_POST_BY_ID)
    return response || null
  },
}
export const deleteAPIs = {
  DeletePost: async (id) => {
    const response = await api.delete(`${endpoints.Posts.DELETE_POST}/${id}`)
    return response?.data || null
  },
}
export const putAPIs = {
  LikePost: async (id) => {
    const response = await api.put(`${endpoints.Posts.LIKE_POST}/${id}`)
    return response?.data || null
  },
  UnlikePost: async (id) => {
    const response = await api.put(`${endpoints.Posts.UNLIKE_POST}/${id}`)
    return response?.data || null
  },
}
