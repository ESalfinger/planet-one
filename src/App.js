import React from 'react';
import {Section} from './Section';

import "./css/App.css";
import "./css/Section.css";


function App() {
  return (
    <div className="App">
      <Section title="hero-title" text="hero-text" hasVideo={false} className =  "hero" />
      <Section title="testTitle" text="test" hasVideo={true} src="TransparentBG"/>
    </div>
  );
}

export default App;
