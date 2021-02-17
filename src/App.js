import React from "react";
import "./styles.css";
import Search from "./Search.js";
import City from "./City";
import Weather from "./Weather.js";




export default function App() {
  return (
    <div className="App" className="wrapper">
      < Search />
      <Weather /> <City />
    </div>
    
    
    
  );
}