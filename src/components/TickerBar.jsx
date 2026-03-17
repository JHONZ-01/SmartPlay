import React from 'react';

import lgLogo from '../assets/images/lg-electronics-logo-svgrepo-com.svg';
import philipsLogo from '../assets/images/philips-svgrepo-com.svg';
import samsungLogo from '../assets/images/samsung-logo-svgrepo-com.svg';
import sonyLogo from '../assets/images/sony-2-logo-svgrepo-com.svg';
import xiaomiLogo from '../assets/images/xiaomi-1-logo-svgrepo-com.svg';

const brands = [
  { name: 'LG', src: lgLogo },
  { name: 'Philips', src: philipsLogo },
  { name: 'Samsung', src: samsungLogo },
  { name: 'Sony', src: sonyLogo },
  { name: 'Xiaomi', src: xiaomiLogo },
];

const TickerBar = () => {
  return (
    <div className="stats-bar" role="marquee" aria-label="Marcas disponibles" aria-live="off">
      <div className="stats-bar__track" aria-hidden="true">

        {/* Primera pasada */}
        {brands.map((brand, i) => (
          <React.Fragment key={`a-${i}`}>
            <div className="stats-bar__item">
              <img src={brand.src} alt={brand.name} style={{ height: '45px', width: 'auto', opacity: 0.85 }} />
            </div>
            <div className="stats-bar__dot"></div>
          </React.Fragment>
        ))}

        {/* Duplicado para loop fluido */}
        {brands.map((brand, i) => (
          <React.Fragment key={`b-${i}`}>
            <div className="stats-bar__item">
              <img src={brand.src} alt={brand.name} style={{ height: '45px', width: 'auto', opacity: 0.85 }} />
            </div>
            <div className="stats-bar__dot"></div>
          </React.Fragment>
        ))}

      </div>
    </div>
  );
};

export default TickerBar;