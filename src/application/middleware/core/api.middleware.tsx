import axios from 'axios'
import type { AnyAction, Dispatch } from 'redux'
import {
  accessDenied,
  API,
  apiEnd,
  apiError,
  apiStart,
} from '../../actions/api.actions'

export interface dispatcherT<S, E extends AnyAction> {
  dispatch: Dispatch<E>
  getState(): S
}

export type Middleware<S, E extends AnyAction> = () => (
  dispatcher: dispatcherT<S, E>,
) => (next: Dispatch<E>) => (action: E) => void //ReturnType<Dispatch<E>>;

// export type MiddlewareFunction = () => (
// 	dispatch: any
// ) => (next: any) => (action: AnyAction) => void;

const apiMiddleware: Middleware<any, AnyAction> = () => ({ dispatch }) => (
  next,
) => (action) => {
  next(action)

  if (action.type !== API) return

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headers,
  } = action.payload
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || ''
  // axios.defaults.headers.common['Content-Type'] = 'application/json'
  // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

  if (label) {
    dispatch(apiStart(label))
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      dispatch(onSuccess(data))
    })
    .catch((error) => {
      dispatch(apiError(error))
      dispatch(onFailure(error))

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname))
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label))
      }
    })
}

export default [apiMiddleware]
