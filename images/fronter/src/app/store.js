import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
// ..
import rootReducer from './reducers'

// ..
export const history = createHistory()
// ...
export const configureStore = ({initialState={}}={}) => {
  // ..
  const router = routerMiddleware(history)
  const middleware = applyMiddleware(thunk, router)
  const store = createStore(rootReducer, initialState, middleware)
  // ...
  return store
}