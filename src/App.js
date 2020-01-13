import React, {useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/de';
import {Section} from './Section';
import {Navigation} from './Navigation';


import "./css/App.css";
import "./css/Section.css";

function App(props) {
  useEffect(() => {
    moment.locale(localStorage.getItem("lng") || "de")
    sessionStorage.setItem("timestamp", moment());
  });

  return (
    <div className="App">
      <Navigation />
      <Section className="hero" button="button call-to-action" action = {() => scrollTo("space")} symbol="arrow_down"/>
      <Section className="space" src="TransparentBG" />
      <Section className="ozone" />
      <Section className="pollution"/>
      <Section className="mountains"/>
      <Section className="weather"/>
      <Section className="forests"/>
      <Section className="animals"/>
      <Section className="ice"/>
      <Section className="plastic"/>
      <Section className="time"/>
      <Section className="team"/>
    </div>
  );
}

function scrollTo(target) {
  let element = document.getElementsByClassName(target)[0];

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default App;
