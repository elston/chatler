import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
// ..
import Routes from './routes'

export default class App extends Component {
  // ...
  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('user'))
  }  
  // ..
  render() {
    return (
      <div>

        {/*...*/}
        {this.user &&        
          <p> Welcome { this.user.firstname }!</p> }

        {/*...*/}
        <ul>
          <li><Link to="/">На главную</Link></li>
          {!this.user &&
            <li><Link to="/auth/signin">Вход</Link></li> }
          {!this.user &&          
            <li><Link to="/auth/signup">Регистрация</Link></li> }
          {this.user &&
            <li><Link to="/chat">Чат</Link></li>}
          {this.user &&
            <li><Link to="/auth/signout">Выход</Link></li>}            
        </ul>
        {/*...*/}                
        <Routes/>
      </div>
    )
  }
}