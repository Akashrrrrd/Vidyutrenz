import React from 'react';
import './Sponsor.css';
import sponsor1 from '../../assets/sponsor1.png';
import sponsor2 from '../../assets/sponsor2.png';
import sponsor3 from '../../assets/sponsor3.png';

const Sponsor = () => {
  return (
    <div className='sponsor'>
      <div className='sponsor-page'>
        <div className='sponsor-page-overlay'>
          <h1>Our Sponsors</h1>
          <div className='sponsor-images'>
            <img alt='Sponsor1' className='floating' />
            <img alt='Sponsor2' className='floating' />
            <img alt='Sponsor3' className='floating' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
