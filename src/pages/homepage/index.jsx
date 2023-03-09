import React from 'react';
import './homepage.css';
import LoginImage from '../../components/loginImage';
import LoginBox from '../../components/loginBox';
const Homepage = () => {
  return (
    <div className='homepage'>
      <LoginImage />
      <LoginBox />
    </div>
  );
};

export default Homepage;
