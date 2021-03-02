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
            <span className="searchTemp">{Math.round(props.celsius)}{""}
            °C | 
        <a href={"#"}onClick={convertFahrenheit}>°F </a> 
            </span>       
        </div>
        
    );
}

else {
return(
    <div >  
    <span className="searchTemp">{Math.round(fahrenheit)}{""} 
    <a href={"#"}onClick={convertCelsius}>°C</a>  | 
        °F 
    </span>
        </div>
);

}








  
}