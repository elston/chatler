import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

@connect(null, actions)
export default class Signout extends Component {

  componentWillMount() {
    const { actionSignout } = this.props
    actionSignout()
  }

  render(){
    return (
      <div className="content">We hope to see you again soon...</div>
    )
  }
}