import React from "react";
import "./Weather.js";
import "./Weather.css"

export default function Weather() {
  return (
    <div className="search">
      <form>
        <div className="row">
          <div className="col-6">
        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
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
      <img src="clouds.jpg"  className="weatherIcon"/>
      <ul className="summary">
      <li className="description"> Cloudy</li>
      <li className="feels"> feels like 2°C </li>
      <li className="humidity"> Humidity:40% </li>
      <li className="wind">Wind Speed:6 km/ph</li>

      </ul>


    </div>





    </div>

    
  );
}
