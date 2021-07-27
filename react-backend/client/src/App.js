import React from 'react'
// import {useState,useEffect} from 'react';
import OldHtml from './OldHtml/OldHtml';
import NewHtml from './NewHtml/NewHtml';
// import macaddress from 'macaddress';
import { Experiment, Variant, emitter, experimentDebugger } from '@marvelapp/react-ab-test';
import './App.css';

experimentDebugger.enable();
emitter.defineVariants('splitUserTraffic', ['OldHtml', 'NewHtml'], [50, 50]);

function App() 
{
  const Winner = (e) => {
    emitter.emitWin ('splitUserTraffic');
  }
    
  return (
    <div>
      <Experiment name='splitUserTraffic'>
        <Variant name='OldHtml'>
          <div className="App">
            <OldHtml />
            <button onClick={Winner}>Checking</button>
          </div>
        </Variant>

         <Variant name='NewHtml'>
          <div className="App">
            <NewHtml />
            <button onClick={Winner}>Checking</button>
          </div>
        </Variant>
      </Experiment>
    </div>
  );
}

export default App;

emitter.addPlayListener(function(experimentName, variantName) {
  console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
});

