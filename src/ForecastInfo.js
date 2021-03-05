import React from "react";

export default function ForecastInfo(props){
    let icon=props.data.weather[0].icon;

    function hours(){
        let date=new Date(props.data.dt*1000);
        let hours=date.getHours();
        if(hours<10){
            hours=`0${hours}`;
        }
        return`${hours}:00`;
        
    }


    function temperature(){
        let temperature= Math.round(props.data.temp);
        return `${temperature}°C`;
    }

    return(
        <div className="forecastInfo col">
            {hours()}
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                {temperature()}
                </div>
    );
}