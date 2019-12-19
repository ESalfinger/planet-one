import React from 'react';

export default function Animal(props) {
  return (
    <div className="animal" id={'animal' + props.id}>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
    </div>);

}