import React from 'react';
import {Section} from './Section';

import "./css/App.css";
import "./css/Section.css";


function App() {
  return (
    <div className="App">
      <Section title="hero-title" text="hero-text" hasVideo={false} className="hero" hasButton={true} action = {scrollTo} target = "space" button="button call-to-action" symbol="arrow_down"/>
      <Section title="space-title" text="space-text" hasVideo={true} src="TransparentBG" className="space" />
      <Section title="ozone-title" text="ozone-text" hasVideo={false} className="ozone" />
      <Section title="air-title" text="air-text" hasVideo={false} className = "air"/>
      <Section title="mountians-title" text="mountians-text" hasVideo={false} className = "mountians"/>
      <Section title="forests-title" text="forests-text" hasVideo={false} className="forests"/>
      <Section title="animals-title" text="animals-text" hasVideo={false} className="animals"/>
    </div>
  );
}

function scrollTo(target) {
  let element = document.getElementsByClassName(target)[0];

  element.scrollIntoView({behavior: "smooth", block: "end"});
  
  console.log("called");
}

export default App;
