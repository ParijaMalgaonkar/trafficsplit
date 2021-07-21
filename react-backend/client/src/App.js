import React from 'react'
import {useState,useEffect} from 'react';
import {useCookies} from 'react-cookie';
import OldHtml from './OldHtml/OldHtml';
import NewHtml from './NewHtml/NewHtml';
import macaddress from 'macaddress';
import './App.css';
export default function App() 
  {
    const [details, setDetails] = useState(null);
 

    const getUserDetails = () => {
      fetch("https://geolocation-db.com/json/fb363670-e22a-11eb-a464-59f706281067")
      .then(response => response.json())
      .then(deets => setDetails(deets));
    }

    
    const [message, setMessage] = useState('')
    
    const setCookieFunction = (value) => {
      localStorage.setItem('counter', value)
      setMessage(value)
    }



    const [data,setData]=useState(0);
    const getData=()=>{
    fetch('/users')
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
      
    }
    console.log(data);
    useEffect(()=>{
      getData()
    },[])
    
 

    console.log("this is data count", data);
    if(message == 0 || message == '')
    {
      // setData(1);

      return (
        <div className="App">
          <OldHtml />
          <button onClick={setCookieFunction(0)}>Details</button>
          {
            details && (
            <div>
              <h1>{details.IPv4}</h1>
              <br />
              <h1>{details.country_name}</h1>
            </div>
          )}
          {message && (
          <div>
            <OldHtml/>
          </div>
          )}
        </div>
      );
    }
    else 
    {
      // setData(0);
      setCookieFunction(1);
      return (
        <div className="App">
          <NewHtml />
          <button onClick={setCookieFunction(0)}>Details</button>
          {
            details && (
            <div>
              <h1>{details.IPv4}</h1>
              <br />
              <h1>{details.country_name}</h1>
            </div>
          )}
          {message && (
          <div>
            <NewHtml/>
          </div>
          )}
        </div>
      );
    }
}
