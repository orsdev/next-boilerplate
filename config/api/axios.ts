import axios from 'axios'
import { AxiosRequestConfig } from 'axios'

export const fetcher = (options: AxiosRequestConfig) =>
  api({ ...options }).then((res: any) => res.data)

export const api = axios.create({
  baseURL: process.env.BASE_ENDPOINT,
  timeout: 30000, // 30 seconds
})

