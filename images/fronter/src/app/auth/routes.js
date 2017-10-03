import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ..
import Signin from './components/signin'
import Signout from './components/signout'
import Signup from './components/signup'
import ResetPassword from './components/reset_password'
import SignupWaitConfirm from './components/signup_waitconfirm'
import SignupVerifyConfirm from './components/signup_verifyconfirm'

export default () => (
  <Switch>
    <Route exact  path='/auth' component={Signin} />
    <Route        path='/auth/signin' component={Signin} />
    <Route        path='/auth/signout' component={Signout} />    
    <Route exact  path='/auth/signup' component={Signup} />
    <Route        path='/auth/signup/waitconfirm' component={SignupWaitConfirm} />
    <Route        path='/auth/signup/verifyconfirm' component={SignupVerifyConfirm} />    
    <Route        path='/auth/reset-password' component={ResetPassword} />
  </Switch>
)