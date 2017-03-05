import React, { Component } from 'react';
import { ChatWindow, Navbar } from '../components';

class Chat extends Component {
  onLogOut() {
    alert('Your going to log out');
  }

  render() {
    return (
      <div className="chat-page">
        <Navbar name="John Doe" onLogOut={() => this.onLogOut()} />
        <div className="page page--gray">
          <div className="container">
            <ChatWindow />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
