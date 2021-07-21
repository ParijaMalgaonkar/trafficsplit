import React from 'react'
import {useState,useEffect} from 'react';
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


   const [counter, setCounter] = useState('');
   const [cookies, setCookie] = useCookies(['user']);

   const handle = () => {
      setCookie('Counter', counter, { path: '/' });
   };



    console.log("this is data count", data);
    if(data==0)
    {
      // setData(1);
      return (
        <div className="App" >
          <OldHtml />
          <button onClick={getUserDetails}>Details</button>
          {
            details && (
            <div>
              <h1>{details.IPv4}</h1>
              <br />
              <h1>{details.country_name}</h1>
            </div>
          )}
        </div>
      );
    }
    else 
    {
      // setData(0);
      return (
        <div className="App">
          <NewHtml />
          <button onClick={getUserDetails}>Details</button>
          {
            details && (
            <div>
              <h1>{details.IPv4}</h1>
              <h1>{details.country_name}</h1>
            </div>
          )}
        </div>
      );
    }
}
