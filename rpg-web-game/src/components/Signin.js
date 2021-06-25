import React from 'react';
import '../index.css';

function Signin() {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <div className="login-box-inside">
        <label>Email
          <input/>
        </label>
        <label>Password
          <input/>
        </label>
        <input type="submit"/>
        <p>register</p>
      </div>
    </div>
  )
}

export default Signin
