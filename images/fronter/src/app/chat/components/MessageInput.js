import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import uuid from 'node-uuid'

// ..
import { plextForm } from '../../plext/components'
import * as actions from '../actions'


const validate = (formProps) => {
    // ..
    const errors = {}
    // .
    if(!formProps.message) {
        errors.message = 'message is required'}
    // ..
    return errors
}

// const mapStateToProps = (state) => {
//     return { 
//         errorMessage: state.auth.error 
//     }
// }

@connect(null, actions)
@reduxForm({ form: 'MessageInput', validate })
class MessageInputForm extends plextForm {

    constructor(props) {
        super(props)
    }

    handleFormSubmit(formProps) {
      const {socket, reset} = this.props
      const user = JSON.parse(localStorage.getItem('user'))
      const {firstname, lastname, email} = user
      const message = {
        text: formProps.message,
        id: `${Date.now()}${uuid.v4()}`,
        user:{
          firstname:firstname,
          lastname:lastname,
          email:email,
        },
      }
      // ..
      socket.emit('new_message', message)
      reset()
    }

    // ...
    render(){
        // ..
        const { handleSubmit } = this.props
        // ..
        return (
          <div className="form-container">
            <form 
              onSubmit={handleSubmit(::this.handleFormSubmit)}
                >

              {/* Email */}
              <Field
                name="message"
                component={this.renderField}
                type="text"
                placeholder="Type here to chat!"
                  />

              {/* Signin button */}
              <button 
                type="submit" 
                className="btn"
                  >Send</button>

            </form>
          </div>
        )
    }
}


@connect(null, actions)
export default class MessageInput extends Component {

    render(){
      const { socket } = this.props      
      return (
        <div className="chat-container">
          <MessageInputForm socket={ socket }/>
        </div>
      )
    }
}