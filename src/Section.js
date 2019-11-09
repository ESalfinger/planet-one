import React from 'react';
import {Video} from './Video';
import "./css/Section.css";
import text from './strings/Text.json';

export function Section(props) {

  return (
    <div>
    <h1>{text[props.title]}</h1>
    <p>{text[props.text]}</p>
    {props.hasVideo && <Video src={props.src} />}
    </div>
  );
}
