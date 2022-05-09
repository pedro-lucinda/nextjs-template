import Axios from 'axios'
import { toast } from 'react-toastify'

export const api = Axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    toast.error(message)
    return Promise.reject(error)
  },
)
