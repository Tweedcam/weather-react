import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props){

return(
< div className="WeatherInfo" className="row">      

 
<div className="weather" className="col-6">
    <img src={props.data.iconUrl} alt={props.data.description} className="weatherIcon"/>
    <ul className="summary">
    <li className="description"> {props.data.description} </li>
    <li className="feels"> feels like{Math.round(props.data.feelsLike)}°C </li>
    <li className="humidity">{Math.round(props.data.humidity)} % </li>
    <li className="wind">{Math.round(props.data.wind)} km/ph</li>
    </ul>
  </div>

<div className="col-6">
<h1 className="city" >{props.data.name}</h1>
      <span className="dateTime">
        <FormattedDate date={props.data.date} />
        </span>
        <TemperatureConversion celsius={props.data.temperature} />
</div>

   
</div>


);
}