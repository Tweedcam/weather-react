import React, {useState} from "react";
import axios from "axios";
import "./Weather.js";
import "./Weather.css"


export default function Weather() {
  const[ready, setReady]=useState=(false);
  const[temperature, setTemperature]=useState(null);
  
  
  function handleResponse(response){
    console.log(response.data);
  }

if (result){
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
} else{
  let city="London"
  const apiKey=`173979aec676620809233769fcdd48b5`
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse)
  
return "Loading Results...."


}





  
  
  
}
