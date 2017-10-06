import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
// ..
// import { CHAT_URL } from '../enums'
import * as actions from '../actions'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
// ..
// ...
const mapStateToProps = (state) => {
    const { onlineUsers } = state.chat
    return { 
        onlineUsers: onlineUsers
    }
}
// ..
@connect(mapStateToProps, actions)
export default class Chat extends Component {

  componentWillMount() {
    const { actionOnlineUsers, actionReceiveMessage } = this.props
    // ...
    // this.socket = io(CHAT_URL)
    // this.socket = io('/chat')    
    // this.socket = io('',{ path: '/chat' })
    this.socket = io({ path: '/chat' })
    this.socket.on('onlineUsers', actionOnlineUsers)
    this.socket.on('new_bc_message', actionReceiveMessage)    
  }  

  componentWillUnmount() {
    this.socket.emit('close_connection')
  }


  render(){
    const { onlineUsers } = this.props
    return (
      <div>
        Сейчас в чате { onlineUsers } человек
        <MessageList />        
        <MessageInput socket={this.socket}/>        
      </div>
    )
  }    
}
