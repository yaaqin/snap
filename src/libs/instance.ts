import toast from 'react-hot-toast'
import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

export const axiosPublic = axios.create({
  baseURL,
})

axiosPublic.interceptors.request.use(
  (config) => {
    // Kalau POST dan pakai FormData, baru set content-type
    if (config.method === 'post' && config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }

    if (typeof window === 'undefined') {
      config.headers['x-ssr-request'] = 'true'
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status
    const message = error.response?.data?.message || 'Terjadi kesalahan'
    toast.error(`Error ${status}: ${message}`)
    return Promise.reject(error)
  }
)
