import React from 'react';

export function Video(props) {
  return (
      <video key={props.src} autoPlay loop className='video' muted data-keepplaying>
        <source src={require("./videos/" + props.src + '.webm')} />
      </video>
      );
};
