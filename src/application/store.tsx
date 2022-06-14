import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import middleware from './middleware'
import reducers from './reducers'

// dev tool
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export const configureStore = (services: any) =>
  createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk, ...middleware.map((f) => f(services))),
    ),
  )

export type RootState = ReturnType<typeof reducers>
