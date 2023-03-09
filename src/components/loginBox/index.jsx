import React from 'react';
import './loginBox.css';
import { registerRequest, loginRequest } from '../../utils';

const LoginBox = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, setLogin] = React.useState('Login');
  const [res, setRes] = React.useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCreate = () => {
    login === 'Login' ? setLogin('Create an account') : setLogin('Login');
  };

  const handleSubmit = async () => {
    if (login === 'Login') {
      const response = await loginRequest({ data: { username: email, password } });
      if (response !== 'success') {
        setRes(response);
      }
      console.log(response);
    } else {
      const response = await registerRequest({ data: { username: email, password } });
      if (response !== 'success') {
        setRes(response);
      }
      console.log(response);
    }
  };

  return (
    <div className='login-box'>
      <h1>Login to your CMS+ account</h1>
      <div className='card'>
        {res && <p className='error'>{res}</p>}
        <label>Email</label>
        <input type='text' value={email} onChange={ handleEmail }/>
        <label>Password</label>
        <input type='password' value={password} onChange={ handlePassword }/>
        <button onClick={handleSubmit} >{login}</button>
        <div className='links'>
          <p>Forgot password?</p>
          <p onClick={ handleCreate } >{ login === 'Login' ? 'Create an account' : 'Login' }</p>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
