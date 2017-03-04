import React, { Component } from 'react';
import LoginPanel from '../components/LoginPanel';
import auth from '../lib/auth';

class Login extends Component {
  constructor() {
    super();
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit(facebookUser) {
    const { router } = this.props;

    auth.logIn(facebookUser).then(() => {
      router.push('/');
    }, (error) => {
      alert(`Cannot log you in because of ${error}`);
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="page page--gray">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                <LoginPanel facebookCallback={this.onLoginSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
