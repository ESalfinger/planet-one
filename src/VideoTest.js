import React from 'react';

export function VideoTest() {
  return (
    <video autoPlay loop>
        <source src={require('./TransparentBG.webm')} />
    </video>
  );
};
