import React from 'react';
import {Video} from './Video';
import "./css/Section.css";

export function Section(props) {

  return (
    <div>
    {props.hasVideo && <Video src={props.src} />}
    </div>
  );
}
