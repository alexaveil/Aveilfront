import axios from 'axios'

const token = window.sessionStorage.getItem('token')

axios.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
