import React, { Component } from 'react';
import ChatWindow from '../components/ChatWindow';
import Navbar from '../components/Navbar';
import auth from '../lib/auth';

class Chat extends Component {
  onLogOut() {
    auth.logOut().then(() => {
      // redirect to login page
      this.props.router.push('/login');
    });
  }

  render() {
    return (
      <div className="chat-page">
        <Navbar name={auth.getUser().name} onLogOut={() => this.onLogOut()} />
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
