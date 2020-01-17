import React from 'react';

export function Video(props) {
  return (
      <video autoPlay loop className='video' muted data-keepplaying>
        <source src={require("./videos/" + props.src + '.webm')} />
      </video>
      );
};
