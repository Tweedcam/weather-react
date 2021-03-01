import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){

return(
< div className="WeatherInfo" >      
<h1 className="city">{props.data.name}</h1>
    <ul>
      <li className="dateTime">
        <FormattedDate date={props.data.date} />
        </li>
    <li className="searchTemp">{Math.round(props.data.temperature)}°C</li>
    </ul>
   

    <div className="weather">
    <img src="clouds.jpg"  className="weatherIcon"/>
    <ul className="summary">
    <li className="description">{props.data.description}</li>
    <li className="feels"> feels like{Math.round(props.data.feelsLike)}°C </li>
    <li className="humidity">{Math.round(props.data.humidity)} % </li>
    <li className="wind">{Math.round(props.data.wind)} km/ph</li>
    </ul>
  </div>
</div>


);
}