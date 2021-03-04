import React from "react";
import axios from "axios";

export default function ForecastWeather(props){

    function handleForecast(response){
        console.log(response.data);
    }


    let apiKey=`173979aec676620809233769fcdd48b5`;
    let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude={currently,minutely,daily}&appid=${apiKey}&units=metric`;
    
    axios.get(url).then(handleForecast);
    

   return("forecast");


}


