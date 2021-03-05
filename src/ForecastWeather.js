import React,{useState}from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import "./ForecastStyle.css"


export default function ForecastWeather(props){
    const[ready,setReady]=useState(false);
    const[forecast,setForecast]=useState(null);

    function handleForecastRequest(response){
        console.log(forecast);
        setForecast(response.data);
        setReady(true);

    }

    if(ready && props.lat === forecast.data.lat ){
        return(
            

            <div className="row" >
                    <ForecastInfo data={forecast.hourly[0]}/>
                    <ForecastInfo data={forecast.hourly[1]}/>
                    <ForecastInfo data={forecast.hourly[2]}/>
                    <ForecastInfo data={forecast.hourly[3]}/>
                    <ForecastInfo data={forecast.hourly[4]}/>
                    <ForecastInfo data={forecast.hourly[5]}/>
                    
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


