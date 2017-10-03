import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ..
import Index from './components'

export default () => (
  <Switch>
    <Route exact path='/dashboard' component={Index} />
  </Switch>
)