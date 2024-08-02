import React, { useState, useEffect } from 'react';
import './Hero.css';
import NavBar from '../NavBar/NavBar';
import SplashScreen from '../SplashScreen/SplashScreen';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2024-09-14T08:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <NavBar />
      <div className='hero'>
        <div className='hero-page'>
          <div className='hero-page-overlay'>
            <h1>Welcome to VIDYUTRENZ 2024</h1>
            <p>Join us for an electrifying experience!</p>
            <div className='countdown'>
              <div className='time-box'>
                <span className='time'>{timeLeft.days}</span>
                <span className='label'>Days </span>
              </div>
              <div className='time-box'>
                <span className='time'>{timeLeft.hours}</span>
                <span className='label'>Hours</span>
              </div>
              <div className='time-box'>
                <span className='time'>{timeLeft.minutes}</span>
                <span className='label'>Minutes</span>
              </div>
              <div className='time-box'>
                <span className='time'>{timeLeft.seconds}</span>
                <span className='label'>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
