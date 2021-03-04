import React,{useState}from "react";
import axios from "axios";

export default function ForecastWeather(props){
    const[ready,setReady]=useState(false);

    function handleForecastRequest(response){
        console.log(response.data);
    }

    if(ready){
        return "ready";

    }
    else{
     let apiKey=`173979aec676620809233769fcdd48b5`;
     let lat= (props.lat);
     let lon=(props.lon);
    let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={currently,minutely,daily}&appid=${apiKey}&units=metric`;
    
    axios.get(url).then(handleForecastRequest);
    
    return("forecast");




    }

    


}


