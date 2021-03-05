import React,{useState}from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import ForecastStyle from "./ForecastStyle.css";


export default function ForecastWeather(props){
    const[ready,setReady]=useState(false);
    const[forecast,setForecast]=useState(null);

    function handleForecastRequest(response){
        setForecast(response.data);
        setReady(true);

    }

    if(ready){
        return(
            <div className="row" >
                    <ForecastInfo data={forecast.hourly[0]}/>
                    
            </div>
            
        );
    }
    else{
     let apiKey=`173979aec676620809233769fcdd48b5`;
     let lat= (props.lat);
     let lon=(props.lon);
    let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={currently,minutely,daily}&appid=${apiKey}&units=metric`;
    
    axios.get(url).then(handleForecastRequest);
    
    return null;

    }
}


