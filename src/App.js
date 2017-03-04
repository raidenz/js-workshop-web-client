import React, { Component } from 'react';
import { ChatPage, LoginPage } from './pages';
import { Router, Route, browserHistory } from 'react-router';
import './App.css';
import { requireAuth } from './lib/auth';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={browserHistory}>
          <Route path="/" component={ChatPage} onEnter={requireAuth} />
          <Route path="/login" component={LoginPage} />
        </Router>
      </div>
    );
  }
}

export default App;
