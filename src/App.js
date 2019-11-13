import React, {useEffect} from 'react';
import moment from 'moment';
import {Section} from './Section';

import "./css/App.css";
import "./css/Section.css";


function App() {
  useEffect(() => {
    sessionStorage.setItem("timestamp", moment());
  });

  return (
    <div className="App">
      <Section className="hero" button="button call-to-action" action = {() => scrollTo("space")} symbol="arrow_down"/>
      <Section className="space" src="TransparentBG" />
      <Section className="ozone" />
      <Section className="air"/>
      <Section className="mountains"/>
      <Section className="weather"/>
      <Section className="forests"/>
      <Section className="animals"/>
      <Section className="ice"/>
      <Section className="plastic"/>
      <Section className="coral"/>
      <Section className="time"/>
      <Section className="team"/>
    </div>
  );
}

function scrollTo(target) {
  let element = document.getElementsByClassName(target)[0];

  element.scrollIntoView({behavior: "smooth", block: "start"});
}

export default App;
