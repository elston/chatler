// ..
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
// ..
import authReducer from './auth/reducers'
import chatReducer from './chat/reducers'

// ..
const reducers = { 
  router: routerReducer,
  form: formReducer,
  auth: authReducer,
  chat:chatReducer
}

// ..
export default combineReducers(reducers)


