import React from 'react'
import {useState,useEffect} from 'react';
import OldHtml from './OldHtml/OldHtml';
import NewHtml from './NewHtml/NewHtml';

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

    console.log("this is data count", data);
    if(data==0)
    {
      // setData(1);
      return (
        <div className="App">
          <h1>{data.count}</h1>
          <h1>Hi Old</h1>
        </div>
      );
    }
    else 
    {
      // setData(0);
      return (
        <div className="App">
          <h1>{data.count}</h1>
          <h1>Hello New</h1>
        </div>
      );
    }
}
