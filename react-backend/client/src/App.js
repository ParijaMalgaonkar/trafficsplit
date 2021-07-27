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

    // const [message, setMessage] = useState('')
    
    // const setCookieFunction = (value) => {
    //   localStorage.setItem('counter', value)
    //   setMessage(value)
    // }

    // const [data,setData]=useState(0);
    // const getData=()=>{
    // fetch('/users')
    //   .then(function(response){
    //     console.log(response)
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //     setData(myJson)
    //   });
      
    // }
    // console.log(data);
    // useEffect(()=>{
    //   getData()
    // },[])
    
 

    // console.log("this is data count", data);
    // if(data == 0 || data == '')
    // setData(1);
  

    const Winner = (e) => {
      emitter.emitWin ('splitUserTraffic');
    }
    
      return (
        <div>
          <Experiment name='splitUserTraffic'>
            <Variant name='OldHtml'>
              <div className="App">
                <OldHtml onLoad={Winner}/>
              </div>
            </Variant>

            <Variant name='NewHtml'>
              <div className="App">
                <NewHtml onLoad={Winner}/>
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

