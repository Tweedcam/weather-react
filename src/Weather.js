import React, {useState} from "react";
import axios from "axios";
import "./Weather.js";
import "./Weather.css"


export default function Weather() {
  const[ready, setReady]=useState(false);
  const[weatherData, setWeatherData]=useState({});
  
  
  function handleResponse(response){
    console.log(response.data);
    setReady(true);
    setWeatherData({
      city: response.data.main.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather.description,
    }

    );
  }

if (ready){
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
      <h1 className="city">{weatherData.city}</h1>
      <span className="searchTemp">{Math.round(weatherData.temperature)}°C</span>
  
      <div className="weather">
      <img src="clouds.jpg"  className="weatherIcon"/>
      <ul className="summary">
      <li className="description">{weatherData.description}</li>
      <li className="feels"> feels like{Math.round(weatherData.feelsLike)}°C </li>
      <li className="humidity">{Math.round(weatherData.humidity)} % </li>
      <li className="wind">{Math.round(weatherData.wind)} km/ph</li>

      </ul>


    </div>
    </div>

    
  );
} else{
  let city="London"
  const apiKey=`173979aec676620809233769fcdd48b5`
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse)
  
return "Loading Results...."


}





  
  
  
}
