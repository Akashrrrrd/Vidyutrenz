import React, { useEffect, useState } from 'react';
import './Sponsor.css';

const Sponsor = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      particleArray.push(<div className="particle" style={style} key={i}></div>);
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="sponsor">
      <div className="particles-container">{particles}</div>
      <div className="sponsor-page">
        <div className="sponsor-page-overlay">
          <h1>Our Sponsors</h1>
          <div className="sponsor-images">
            <img alt='sponsor-1'/>
            <img alt='sponsor-1'/>
            <img alt='sponsor-1'/>
            <img alt='sponsor-1'/>
            <img alt='sponsor-1'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
