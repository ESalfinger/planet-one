import React from 'react';
import {Section} from './Section';
import "./css/App.css";


function App() {
  return (
    <div className="App">
      <Section title="testTitle" text="test" hasVideo={true} src="TransparentBG"/>
    </div>
  );
}

export default App;
