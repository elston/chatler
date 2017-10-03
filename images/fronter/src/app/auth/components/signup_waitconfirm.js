import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'


// ...
const mapStateToProps = (state) => {
  return { 
    errorMessage: state.auth.error, 
    signup: state.auth.signup,
    resend: state.auth.resendcode,
  }
}


// ...
@connect(mapStateToProps, actions)
export default class SignupWaitConfirm extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { resend: false };
  // }

  componentWillMount() {
    // ..
    const { history, location:{search} } = this.props
    const searchParam = search && new URLSearchParams(search)
    this.email = searchParam && searchParam.get('email')
    // ..
    // if(!signup || !this.email) {    
    if(!this.email) {
      history.push('/auth/signup') 
    }
  }

  resendEmail(props) {
    const { actionResendcode } = this.props
    // this.setState({ resend: true })
    actionResendcode(props)
  }

  render() {
    // const { resend } = this.state.resend
    const { resend } = this.props
    return (
      <div className="content">

        <h1>Activate account</h1>
        <h3>Please confirm the verification code we have just emailed you at <u>{ this.email && this.email }</u></h3>

        { !resend
          ?<p className="resend" onClick={this.resendEmail.bind(this,{ email:this.email })}>
              Resend email verification code
            </p> 
          :<p className="resended">
              Email verification code has been resended
            </p> }

        { this.props.errorMessage && 
          this.props.errorMessage.resendcode && 
          <div className="error-container">
              { this.props.errorMessage.resendcode }
            </div> }

      </div>
    )
  } 
}