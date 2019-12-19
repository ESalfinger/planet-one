import React from 'react';

export function Video(props) {
  return (
      <video autoPlay loop className='video' muted>
        <source src={require("./videos/" + props.src + '.webm')} />
      </video>
      );
};