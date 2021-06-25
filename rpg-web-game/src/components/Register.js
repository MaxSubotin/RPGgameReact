import React from 'react';
import '../index.css';

function Register() {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <div className="login-box-inside">
      <label>Name
          <input/>
        </label>
        <label>Email
          <input/>
        </label>
        <label>Password
          <input/>
        </label>
        <input type="submit"/>
        <p>signin</p>
      </div>
    </div>
  )
}

export default Register
