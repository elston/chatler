import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

// ..
import { plextForm } from '../../plext/components'
import * as actions from '../actions'


const validate = (formProps) => {

    // ..
    const errors = {}
    // .
    if(!formProps.email) {
        errors.email = 'Email is required'}
    // ..
    if(!formProps.password) {
        errors.password = 'Password is required'}
    // ..
    return errors
}

const mapStateToProps = (state) => {
    return { 
        errorMessage: state.auth.error 
    }
}

@connect(mapStateToProps, actions)
@reduxForm({ form: 'signin', validate })
class SigninForm extends plextForm {

    constructor(props) {
        super(props)
    }

    handleFormSubmit(formProps) {
        const { signinAction } = this.props        
        signinAction(formProps)
    }

    // ...
    render(){
        // ..
        const { handleSubmit, errorMessage } = this.props
        // ..
        return (
            <div className="form-container">
                <h1>Sign in</h1>            
                <form onSubmit={handleSubmit(::this.handleFormSubmit)}>

                    {/* Email */}
                    <Field
                        name="email"
                        component={this.renderField}
                        type="text"
                        placeholder="Email"
                    />

                    {/* Password */}
                    <Field
                        name="password"
                        component={this.renderField}
                        type="password"
                        placeholder="Password"
                    />

                    {/* Forgot password */}
                    <div className="password-forgot">
                        <Link to="/auth/reset-password">
                            I forgot my password
                        </Link>
                    </div>

                    {/* Server error message */}
                    { errorMessage && errorMessage.signin &&
                        <div className="error-container signin-error">
                            Oops! { errorMessage.signin }
                        </div> 
                    }

                    {/* Signin button */}
                    <button type="submit" className="btn">
                        Sign in
                    </button>

                    {/* Signup button */}
                    <div className="form-bottom">
                        <p>Dont have an account?</p>
                        <Link to="/auth/signup">
                            Click here to sign up
                        </Link>
                    </div>

                </form>
            </div>
        )
    }
}


@connect(null, actions)
export default class Signin extends Component {

    componentWillUnmount(){
        const { clearErrorsAction } = this.props
        clearErrorsAction()
    }

    render(){
        return (
            <div className="container">
                <SigninForm/>
            </div>
        )
    }
}