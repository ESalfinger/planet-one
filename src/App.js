import React from 'react';
import {Section} from './Section';

import "./css/App.css";
import "./css/Section.css";


function App() {
  return (
    <div className="App">
      <Section title="hero-title" text="hero-text" hasVideo={false} className="hero" hasButton={true} button="button call-to-action" symbol="arrow_down"/>
      <Section title="space-title" text="space-text" hasVideo={true} src="TransparentBG" className="space" />
    </div>
  );
}

export default App;
