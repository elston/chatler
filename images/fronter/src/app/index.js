// ..
import React from 'react';
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// ..
import App from './app'
import { configureStore, history } from './store'
import { SIGNIN_SUCCESS } from './auth/enums'
import './styles/bundle.scss'

// ..
const store = configureStore()
// import { createStore } from 'redux'
// const store = createStore( () => {}, {})

// ..
const user = JSON.parse(localStorage.getItem('user'));
if (user && user.token) {
  store.dispatch({ type: SIGNIN_SUCCESS })}

// ..
const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
)

// ..
render(root, document.getElementById('root'))
