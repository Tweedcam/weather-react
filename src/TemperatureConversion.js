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
        <div >         
        <span className="units"> °C | 
        <a href={"#"}onClick={convertFahrenheit}>°F </a> 
        </span> 
        <span className="searchTemp">{Math.round(props.celsius)}{""}</span>  
        </div>
        
    );
}

else {
return(
    <div >         
       <span className="units"> 
         <a href={"#"}onClick={convertCelsius}>°C</a>  | 
        °F 
        </span> 
        <span className="searchTemp">{Math.round(fahrenheit)}{""} </span>
        </div>
);

}








  
}