import React from 'react';

export default function Mountain(props) {
  return (
    <div className="mountain" id={'mountain' + props.id}>
            <h1>{props.name}</h1>
            <p>{props.country}</p>
        </div>);

}