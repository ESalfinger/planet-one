import React from 'react';

export function Video(props) {
  return (
    <div>
      <video autoPlay loop className = 'video' muted>
        <source src={require('./' + props.src + '.webm')} />
      </video>
    </div>
  );
};
