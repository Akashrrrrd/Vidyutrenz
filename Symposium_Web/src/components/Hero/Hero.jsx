import React from 'react';
import './Hero.css';
import logo from '../../assets/logo.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-page'>
        <div className='hero-page-overlay'>
          <h1>Welcome to VIDYUTRENZ 2024</h1>
          <p>Join us for an electrifying experience!</p>
          <a href='#register' className='cta-button'>Register Now</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
