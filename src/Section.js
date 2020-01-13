import React from 'react';
import { Video } from './Video';
import { Button } from './Button';
import { Cards } from './Cards';
import { Weather } from './Weather';
import { Time } from './Time';
import { Quote } from './Quote';

import "./css/Section.css";
import "./css/hero.css";

import i18n from 'i18next';
import k from "./i18n/keys";

export function Section(props) {

  return (
    <div className = {props.className} id = {props.className}>
      <div className='text'>
        {props.className !== "weather" && props.className !== "animals" && props.className !== "hero" && <h1>{i18n.t(k[(props.className + 'title').toUpperCase()])}</h1>}
        <p>{i18n.t(k[(props.className + 'text').toUpperCase()])}</p>
      </div>
      {props.src && <Video src={props.src} />}
      {props.className === 'hero' && <Quote />}
      {props.button && <Button action={props.action} target={props.target} symbol={props.symbol} className={props.button} buttonText={props.buttonText} />}
      {(props.className === "animals") && <Cards type={props.className} />}
      {props.className === "weather" && <Weather />}
      {props.className === "time" && <Time />}
    </div>);
}
