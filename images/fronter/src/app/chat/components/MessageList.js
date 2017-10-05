import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageListItem from './MessageListItem'

const mapStateToProps = (state) => {
    const { messages } = state.chat
    return { 
        messages: messages
    }
}

@connect(mapStateToProps)
export default class MessageList extends Component {
  render(){
    // ..
    const { messages } = this.props
    let messagesList = []
    if (messages && messages.length > 0) {
      messagesList = messages.map((message) => {
        return (
          <MessageListItem message={message} key={message.id}/>
      )}
    )}
    // ..
    return (
      <div className="chat-container">
        { messages && 
          <ul>
            { messagesList }
          </ul> } 
        { !messages &&
          <h1>Messages is empty</h1>}               
      </div>
    )    
  }
}