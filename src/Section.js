import React from 'react';
import { Video } from './Video';
import { Button } from './Button';
import { Weather } from './Weather';
import { Time } from './Time';
import { Quote } from './Quote';
import { Cites } from './Cites';
import spaceBG from './images/spaceBackground.jpg';
import { Language } from './Language';
import logo from './images/logo.png';
import LogoLink from './LogoLink';
import Animal from './Animal';
import animals from './strings/animals.json';

import "./css/Section.css";
import "./css/hero.css";
import "./css/space.css";
import "./css/ozone.css";
import "./css/pollution.css";
import "./css/mountains.css";
import "./css/plastic.css";
import "./css/ice.css";
import "./css/Team.css";
import "./css/Summary.css";

import i18n from 'i18next';
import k from "./i18n/keys";

export function Section(props) {
  function getHTML(text) {
    return i18n.t(k[(text + 'text').toUpperCase()]);
  }
  return (
    <div className = {"section " + props.className} id = {props.className} style = {props.className === 'space' ? {backgroundImage: 'url(' + spaceBG + ')', backgroundSize: 'cover'} : {}}>
      {props.className === 'hero' &&
        <div className = "logo">
            <img src = {logo} alt = "logo"></img>
        </div>
      }
      <Language />
      {props.texts && props.texts.map((text, index) =>
        <div id = {'text' + index} key = {text} className='text'>
         <p dangerouslySetInnerHTML={{__html: getHTML(text)}}></p>
        </div>
      )}
      { props.src && props.src.map((video) =>
        <Video id = {video} key = {video} src = {video} />
      )}
      {props.className === 'hero' && <Quote />}
      {props.button && <Button action={props.action} target={props.target} symbol={props.symbol} className={props.button} buttonText={props.buttonText} />}
      {(props.className === "animals") &&
        animals.map((animal) => <Animal img={animal.img} key={animal.id} id={animal.id} name={animal.name} text={animal.text} />)
      }
      {props.className === "weather" && <Weather />}
      {props.className === "team" && <Cites />}
      {props.className === "team" && <LogoLink />}
      {props.className === "time" && <Time />}
    </div>);
}
