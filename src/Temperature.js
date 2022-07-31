import React, { useState } from "react";
import "./styles.css";

export default function Temperature(props){
    const [unit, setUnit] = useState("celcius");

    function convertToCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }

    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if(unit === "celcius"){
    let celcius = props.celcius;
    return(
        <div>
          <h1 id="current-temp">{Math.round(celcius)}°C</h1>
          <button onClick={convertToFahrenheit} className="search" id="convert">Convert to Fahrenheit</button>
        </div>
    )
}

else{
    let fahrenheit = Math.round(props.celcius * 1.8 + 32);
    return(
        <div>
          <h1 id="current-temp">{fahrenheit}°F</h1>
          <button onClick={convertToCelcius} className="search" id="convert">Convert to Celcius</button>
        </div>
    )
}
}