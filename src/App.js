import React from "react";
import "./styles.css";
import Weather from "./Weather.js";




export default function App() {
  return (
    <div className="App" className="wrapper">
      <Weather defaultCity="Birmingham,Uk" />
    </div>
    
    
    
  );
}