import React from 'react';

import './css/Animal.css'

export default function Animal(props) {
  return (
    <div className="animal" id={'animal' + props.id}>
      <div className = "animal-hero">
        <img src = {require('./images/' + props.img + '.png')} alt = {props.name}></img>
        <h1>{props.name}</h1>
      </div>
      <p className = 'animal-text'>{props.text}</p>
    </div>);

}