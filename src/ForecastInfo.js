import React from "react";

export default function ForecastInfo(props){
    let icon=props.data.weather[0].icon;
    return(
        <div className="forecastInfo col">
        {new Date(props.data.dt*1000).getHours()}:00
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                {Math.round(props.data.temp)}°C 
                </div>
    );
}