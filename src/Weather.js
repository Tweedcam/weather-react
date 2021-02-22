import React from "react";
import "./Weather.js";
import "./Weather.css"

export default function Weather() {
  return (
    <div className="search">
      <form>
        <div className="row">
          <div className="col-6">
        <input type="search" placeholder="Enter a city" className="form-control"/>
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary"/>
        </div>
        </div>
      </form>
      
      <h2 className="dateTime">15:14</h2>
      <h1 className="city"> London</h1>
      <span className="searchTemp">5°C</span>
  



      <div className="weather">
      <i className="fas fa-cloud fa-3x"></i>
      <span className="summary">Cloudy</span>
      <span className="feels">feels like 2°C</span>
      <span className="humidity">Humidity:40%</span>
    </div>





    </div>

    
  );
}
