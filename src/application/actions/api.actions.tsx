export const API = 'API'
export const API_START = 'API_START'
export const API_END = 'API_END'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'
export const ACCESS_DENIED = 'ACCESS_DENIED'
//entity :prefix

export const apiStart = (label: string) => ({
  type: API_START,
  payload: label,
})

export const apiEnd = (label: string) => ({
  type: API_END,
  payload: label,
})

export const accessDenied = (url: string) => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
})

export const apiError = (error: string) => ({
  type: API_ERROR,
  error,
})

type fn<T> = (
  data?: T,
) => {
  type: string
  payload: T
}
type apihadler<S, T> = (
  url: string,
  method: 'GET' | 'POST',
  data: S | {},
  onSuccess: fn<T>,
  onFailure: fn<T>,
  accessToken: string,
  label?: string,
) => any
export const apiAction: apihadler<any, any> = (
  url,
  method = 'GET',
  data = {},
  onSuccess: fn<any>,
  onFailure: fn<any>,
  //onFailure = () => {},
  label = '',
  accessToken = '',
) => ({
  type: API,
  payload: {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
  },
})
