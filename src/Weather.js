import React, {useState} from "react";
import axios from "axios";
import "./Weather.js";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";


export default function Weather() {
  const[weatherData, setWeatherData]=useState({ready:false});
  
  
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      date: new Date(response.data.dt*1000),
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather.description,
    }

    );
  }

  function handleSubmit(event){
    event.preventDefault();

  }




  function handleCity(event){

  }




if (weatherData.ready){
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCity}/>
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary"/>
        </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      
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
