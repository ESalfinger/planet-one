import React from 'react';
import './VideoTest.css';
import Image from './bg.jpg';

export function VideoTest() {
  return (
    <div>
      <video autoPlay loop className = 'video'>
        <source src={require('./TransparentBG.webm')} />
      </video>
      <img src = {Image} className = 'background'></img>
    </div>
  );
};
