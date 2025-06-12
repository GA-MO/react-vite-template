import axios, { type AxiosInstance } from 'axios'
import { getCookie } from 'typescript-cookie'

export const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60000,
  headers: {
    Authorization: `Bearer ${getCookie('SID')}`
  }
})
