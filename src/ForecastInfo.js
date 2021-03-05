import React from "react";

export default function ForecastInfo(props){
    return(
        <div className="forecastInfo col">
        {new Date(props.data.dt*1000).getHours()}:00
                <img src={props.icon} className="forecastIcon" />
                {Math.round(props.data.temp)}°C 
                </div>
    );
}