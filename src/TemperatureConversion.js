import React, {useState} from "react";

export default function TemperatureConversion(props){
    const[unit,setUnit]=useState("celsius");
    let fahrenheit= ((props.celsius*9)/5+32);

    function convertFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

if (unit === "celsius"){
    return(
        <div className="searchTemp">         
        <span >{Math.round(props.celsius)}{""} °C | 
        <a href={"#"}className="units"onClick={convertFahrenheit}>°F </a> 
        </span>          
        </div>
        
    );
}

else {
return(
<div className="searchTemp">         
        <span >{Math.round(fahrenheit)}{""} <a href={"#"}className="units"onClick={convertCelsius}>°C</a>  | 
        °F 
        </span>          
        </div>
);

}








  
}