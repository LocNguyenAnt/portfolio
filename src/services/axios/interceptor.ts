/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const controllerAxiosRequest = new AbortController()

function onRequest(
  config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> {
  const token = localStorage.getItem('authToken') // replace me 😣😣😣

  if (token) {
    config.headers.setAuthorization(`Bearer ${token}`)
    config.signal = controllerAxiosRequest.signal
  }
  return config
}

function onRequestError(error: AxiosError): Promise<AxiosError> {
  console.error(`[request error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}

function onResponse(response: AxiosResponse): AxiosResponse {
  return response
}

function onResponseError(error: AxiosError): Promise<AxiosError> {
  console.error(`[response error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}

instance.interceptors.request.use(onRequest, onRequestError)
instance.interceptors.response.use(onResponse, onResponseError)

export { controllerAxiosRequest }
export default instance
