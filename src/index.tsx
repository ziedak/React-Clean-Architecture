import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './application/store'
import services from './infrastructure/services'
import App from './views/App'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
