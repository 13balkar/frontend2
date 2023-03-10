import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import './route.css';

const ProtectedRoutes = ({ children }) => {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    const value = localStorage.getItem('token');
    axios.post('http://localhost:4000/token/validate', {}, { headers: { token: value } })
      .then(response => {
        setToken(response.data.userName);
      });
  }, []);
  return token === null
    ? <div className='login'>
      <h1>You are not Logged In</h1>
     </div>
    : children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoutes;
