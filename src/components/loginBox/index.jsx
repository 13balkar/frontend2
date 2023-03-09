import React from 'react';
import './loginBox.css';
import { useNavigate } from 'react-router-dom';
import { registerRequest, loginRequest } from '../../utils';

const LoginBox = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [login, setLogin] = React.useState('Login');
  const [res, setRes] = React.useState(null);
  const navigate = useNavigate();

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
      response === 'success' ? setRes(null) : setRes(response);
      if (response === 'success') {
        navigate('/cms');
      }
    } else {
      const response = await registerRequest({ data: { username: email, password } });
      response === 'success' ? setRes('Login Now') : setRes(response);
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
