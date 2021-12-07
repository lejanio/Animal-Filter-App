import React from 'react';
import logo from '../assets/animal-logo.png';

const Logo = () => (

  <div
    style={{
      display: 'flex', fontSize: '8rem', alignItems: 'center', justifyContent: 'center', fontFamily: 'fantasy',
    }}
  >
    A
    <span style={{ fontSize: '1rem' }}>nimal</span>
    <img src={logo} alt="logo" height="150px" style={{ padding: '0' }} />
    F
    <span style={{ fontSize: '1rem' }}>ilter</span>
  </div>
);

export default Logo;
