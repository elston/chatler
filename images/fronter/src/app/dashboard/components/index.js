import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
// ..
import { CHAT_URL } from '../enums'
import * as actions from '../actions'
// ..
// ...
const mapStateToProps = (state) => {
    return { 
        usersCount: state.dashboard.usersCount 
    }
}
// ..
@connect(mapStateToProps, actions)
export default class Dashboard extends Component {

  componentWillMount() {
    // console.log('chat WillMount')
    const { onlineUsers } = this.props
    // ...
    this.socket = io(CHAT_URL)    
    this.socket.on('onlineUsers', onlineUsers)
  }  

  componentWillUnmount() {
    // console.log('chat WillUnmount')    
    this.socket.emit('close_connection')
  }


  render(){
    const { usersCount } = this.props
    // console.log(usersCount)
    return (
      <div>
        Сейчас в чате { usersCount } человек
      </div>
    )
  }
}
