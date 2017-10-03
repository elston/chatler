// ..
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
// ..
import authReducer from './auth/reducers'

// ..
const reducers = { 
  router: routerReducer,
  form: formReducer,
  auth: authReducer 
}

// ..
export default combineReducers(reducers)


