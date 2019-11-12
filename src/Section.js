import React from 'react';
import {Video} from './Video';
import {Button} from './Button';
import {Cards} from './Cards';
import {Weather} from './Weather';
import "./css/Section.css";
import text from './strings/Text.json';

/*
  Define Title via title attribute
  Define Text via text attribute
  If section has video set hasVideo to true and src to fileName without path and extension (has to be WEBM!!!)
*/
export function Section(props) {

  return (
    <div className = {props.className}>
      <div className = 'text'>
        <h1>{text[props.className + '-title']}</h1>
        <p>{text[props.className + '-text']}</p>
      </div>
      {props.src !=null && <Video src={props.src} />}
      {props.button != null && <Button action = {props.action} target = {props.target} symbol = {props.symbol} className = {props.button} buttonText = {props.buttonText} />}
      {props.hasCards && <Cards type = {props.className}/>}
      {props.hasWeather && <Weather />}
    </div>
  );
}
