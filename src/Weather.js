import React, {useState} from "react";
import axios from "axios";
import "./Weather.js";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import ForecastWeather from "./ForecastWeather";


export default function Weather(props) {
  const[weatherData, setWeatherData]=useState({ready:false});
  const [city, setCity]=useState(props.defaultCity);
  
  function handleResponse(response){
    console.log(response.data)
    setWeatherData({
      ready:true,
      iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      lon:response.data.coord.lon,
      lat:response.data.coord.lat,
      date: new Date(response.data.dt*1000),
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    }

    );
  }

  function search(){
    const apiKey=`173979aec676620809233769fcdd48b5`
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
  }


  function handleSubmit(event){
    event.preventDefault();
    search()

  }

  function handleCityChange(event){
    setCity(event.target.value);
  
  }


if (weatherData.ready){
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary"/>
        </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <ForecastWeather city={weatherData.name} lon={weatherData.lon} lat={weatherData.lat}/>
      
    </div>

    
  );
}else{
  search();
  return "Loading Results...."
  

}
  

}

