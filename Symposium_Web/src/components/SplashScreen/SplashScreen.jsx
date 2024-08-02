import React from 'react';
import './SplashScreen.css';
import splash_logo from '../../assets/splash_logo.png';


const SplashScreen = () => {
  return (
    <div className='splash-screen'>
      <img src={splash_logo} alt='Logo' className='splash-logo' />
    </div>
  );
};

export default SplashScreen;
