// ..
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
// ..
import authReducer from './auth/reducers'
import dashboardReducer from './dashboard/reducers'

// ..
const reducers = { 
  router: routerReducer,
  form: formReducer,
  auth: authReducer,
  dashboard:dashboardReducer
}

// ..
export default combineReducers(reducers)


