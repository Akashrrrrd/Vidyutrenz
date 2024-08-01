import React from 'react';
import './Sponsor.css';


const Sponsor = () => {
  return (
    <div className='sponsor'>
      <div className='sponsor-page'>
        <div className='sponsor-page-overlay'>
          <h1>Our Sponsors</h1>
          <div className='slider'>
            <div className='slide-track'>
              <div className='logo'><img  alt='Sponsor1' /></div>
              <div className='logo'><img  alt='Sponsor2' /></div>
              <div className='logo'><img  alt='Sponsor3' /></div>
              <div className='logo'><img  alt='Sponsor4' /></div>
              <div className='logo'><img  alt='Sponsor5' /></div>
              <div className='logo'><img  alt='Sponsor6' /></div>
              <div className='logo'><img  alt='Sponsor7' /></div>
              {/* Repeat the logos to ensure smooth infinite scrolling */}
              <div className='logo'><img  alt='Sponsor1' /></div>
              <div className='logo'><img  alt='Sponsor2' /></div>
              <div className='logo'><img  alt='Sponsor3' /></div>
              <div className='logo'><img  alt='Sponsor4' /></div>
              <div className='logo'><img  alt='Sponsor5' /></div>
              <div className='logo'><img  alt='Sponsor6' /></div>
              <div className='logo'><img  alt='Sponsor7' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
