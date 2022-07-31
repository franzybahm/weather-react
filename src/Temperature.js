import React from "react";
import "./styles.css";

export default function Temperature(props){

    let unitCelcius = true;

if(unitCelcius){
    let celcius = props.temp;
    let fahrenheit = Math.round(celcius * 1.8 + 32);
    return(
        <div>
          <h1 id="current-temp">{fahrenheit}°F</h1>
          {/*<button>Convert to Celcius</button>*/}
        </div>
    )
}

else{
    let fahrenheit = props.temp;
    let celcius = Math.round((fahrenheit - 32) / 1.8);
    return(
        <div>
          <h1 id="current-temp">{celcius}°C</h1>
          {/*<button>Convert to Fahrenheit</button>*/}
        </div>
    )
}
}

