import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ..
import authApp from './auth/app'
import lendingApp from './lending/app'
import chatApp from './chat/app'

// ..
export default () => (
  <Switch>
    <Route exact  path='/' component={lendingApp} />
    <Route path='/auth' component={authApp} />
    <Route path='/chat' component={chatApp} />    
  </Switch>
)