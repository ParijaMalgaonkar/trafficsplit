import React from 'react'
import {useState,useEffect} from 'react';
import OldHtml from './OldHtml/OldHtml';
import NewHtml from './NewHtml/NewHtml';
import macaddress from 'macaddress';
export default function App() 
  {
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

    macaddress.all().then(function (all) {
      console.log(JSON.stringify(all, null, 2));
    });

    console.log("this is data count", data);
    if(data==0)
    {
      // setData(1);
      return (
        <div className="App">
          <OldHtml />
        </div>
      );
    }
    else 
    {
      // setData(0);
      return (
        <div className="App">
          <NewHtml />
        </div>
      );
    }
}
