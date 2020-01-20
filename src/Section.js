import React from 'react';
import { Video } from './Video';
import { Button } from './Button';
import { Cards } from './Cards';
import { Weather } from './Weather';
import { Time } from './Time';
import { Quote } from './Quote';
import { Cites } from './Cites';
import spaceBG from './images/spaceBackground.jpg';

import "./css/Section.css";
import "./css/hero.css";
import "./css/space.css";
import "./css/ozone.css";
import "./css/pollution.css";
import "./css/mountains.css";

import i18n from 'i18next';
import k from "./i18n/keys";

export function Section(props) {
  function getHTML(text) {
    return i18n.t(k[(text + 'text').toUpperCase()]);
  }
  return (
    <div className = {"section " + props.className} id = {props.className} style = {props.className === 'space' ? {backgroundImage: 'url(' + spaceBG + ')', backgroundSize: 'cover'} : {}}>
      {props.texts && props.texts.map((text) => 
        <div className='text'>
         <p dangerouslySetInnerHTML={{__html: getHTML(text)}}></p>
        </div>
      )}
      { props.src && props.src.map((video) => 
        <Video id = {video} key = {video} src = {video} />
      )}
      {props.className === 'hero' && <Quote />}
      {props.button && <Button action={props.action} target={props.target} symbol={props.symbol} className={props.button} buttonText={props.buttonText} />}
      {(props.className === "animals") && <Cards type={props.className} />}
      {props.className === "weather" && <Weather />}
      {props.className === "time" && <Time />}
      {props.className === "team" && <Cites />}
    </div>);
}
