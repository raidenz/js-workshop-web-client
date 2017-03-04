import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginPanel = ({ facebookCallback }) => (
  <div className="login-panel">
    <FacebookLogin
      appId="724401854395719"
      autoLoad
      callback={(facebookUser) => facebookCallback(facebookUser)}
      icon="fa-facebook"
    />
  </div>
);

export default LoginPanel;
