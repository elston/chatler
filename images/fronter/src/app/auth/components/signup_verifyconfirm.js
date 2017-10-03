import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

// ...
const mapStateToProps = (state) => {
  return { 
    errorMessage: state.auth.error, 
    resend: state.auth.resendcode,
    verify: state.auth.verifycode,    
  }
}


@connect(mapStateToProps, actions)
export default class SignupVerifyConfirm extends Component {


  componentWillMount() {
    // ..
    const { actionVerifycode, location:{search} } = this.props
    const searchParam = search && new URLSearchParams(search)
    this.email = searchParam && searchParam.get('email')
    this.token = searchParam && searchParam.get('token')    
    // ..
    actionVerifycode({email:this.email, token:this.token})
  }

  resendEmail(props) {
    const { actionResendcode } = this.props
    actionResendcode(props)
  }

  render(){
    const { email } = this
    const { resend, verify } = this.props    
    return (
      <div className="content">

        { this.props.errorMessage && 
          this.props.errorMessage.verifycode
          ?<div>
              <h1>Failure</h1>
              <p className="error-container">
                  { this.props.errorMessage.verifycode.message }
                </p>
            </div>
          :<p>
              Verification successful :) you may now login
            </p> }

        { this.props.errorMessage && 
          this.props.errorMessage.verifycode && 
          this.props.errorMessage.verifycode.allowresend &&           
          !resend &&
          <p className="resend" onClick={this.resendEmail.bind(this, email)}>
              Resend verification code
            </p> }

        { resend &&
          <p className="resended">
              Email verification code has been resended
            </p> }

      </div>
    )
  }
}