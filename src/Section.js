import React from 'react';
import {Video} from './Video';
import {Button} from './Button';
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
      <h1>{text[props.title]}</h1>
      <p>{text[props.text]}</p>
      {props.hasVideo && <Video src={props.src} />}
      {props.hasButton && <Button symbol = {props.symbol} className = {props.button} buttonText = {props.buttonText} />}
    </div>
  );
}
