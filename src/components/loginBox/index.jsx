import React from 'react';
import './loginBox.css';

const LoginBox = () => {
  return (
    <div className='login-box'>
      <h1>Login to your CMS+ account</h1>
      <div className='card'>
        <label>Email</label>
        <input type='text' />
        <label>Password</label>
        <input type='password' />
        <button>Login</button>
        <div className='links'>
          <a href='#'>Forgot Password?</a>
          <a href='#'>Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
