import React from 'react';
import {Section} from './Section';

import "./css/App.css";
import "./css/Section.css";


function App() {
  return (
    <div className="App">
      <Section title="hero-title" text="hero-text" hasVideo={false} className="hero" action = {() => scrollTo("space")} button="button call-to-action" symbol="arrow_down"/>
      <Section title="space-title" text="space-text" hasVideo={true} src="TransparentBG" className="space" />
      <Section title="ozone-title" text="ozone-text" hasVideo={false} className="ozone" />
      <Section title="air-title" text="air-text" hasVideo={false} className = "air"/>
      <Section title="mountains-title" text="mountains-text" hasVideo={false} className = "mountains" hasCards={true}/>
      <Section title="weather-title" hasWeather={true} className="weather" />
      <Section title="forests-title" text="forests-text" hasVideo={false} className="forests"/>
      <Section title="animals-title" text="animals-text" hasVideo={false} className="animals" hasCards={true}/>
      <Section title="ice-title" text="ice-text" hasVideo={false} className="ice"/>
      <Section title="plastic-title" text="plastic-text" hasVideo={false} className="plastic"/>
      <Section title="fish-title" text="fish-text" hasVideo={false} className="fish"/>
    </div>
  );
}

function scrollTo(target) {
  let element = document.getElementsByClassName(target)[0];

  element.scrollIntoView({behavior: "smooth", block: "end"});
}

export default App;
