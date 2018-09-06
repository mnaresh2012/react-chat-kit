import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm';
import ChatsScreen from './components/ChatsScreen';

class App extends Component {
  constructor() {
        super()
        this.state = {
          currentUsername: '',
          currentScreen: 'WhatIsYourUsernameScreen'
        }
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
      }
    
      onUsernameSubmitted(username) {
        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        })
          .then(response => {
            this.setState({
              currentUsername: username,
              currentScreen: 'ChatsScreen'
            })
          })
          .catch(error => console.error('error', error))
  }
  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatsScreen') {
      return <ChatsScreen currentUsername={this.state.currentUsername} />
    }
  }
}
export default App;