import React from 'react';
import propTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { GET_CONTENTS } from '../../constants/apiEndPoints';
import './navbar.css';
const Navbar = ({ view, setView }) => {
  const [names, setNames] = React.useState(null);
  React.useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      makeRequest(GET_CONTENTS, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
          response = response.map(item => item.content_name);
          setNames(response);
        });
    }
  }, []);
  return (
    <div className='navbar'>
      <div className='heading'>
        <h1>CMS+</h1>
      </div>
      <div className='list'>
        <p onClick={() => setView('collection') }>COLLECTION TYPES</p>
        {
          names !== null && names.map((item, index) => {
            return (
              <li className='c_name' key={index} onClick={() => setView(item)}>{item}</li>
            );
          })
        }
      </div>
      <div className='builder'>
        <p onClick={() => setView('content')}>CONTENT TYPE BUILDER</p>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  view: propTypes.string.isRequired,
  setView: propTypes.func.isRequired
};

export default Navbar;
