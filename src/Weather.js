import React from "react";
import "./styles.css";

//import FormattedDate from "./FormattedDate.js";
import Temperature from "./Temperature";

export default function Weather(props) {
  if (props.loaded) {
    let iconURL = `https://openweathermap.org/img/wn/${props.weatherInfo.icon}@4x.png`;
    return (
      <div class="row">
        <div class="col-10 shadow p-3 mb-5 bg-body rounded current-weather">
          <div class="row">
            <div class="col-4 big-weather">
              <img src={iconURL} alt="sunny" id="weather-icon"></img>
            </div>
            <div class="col-4">
              <h2 id="current-city">{props.weatherInfo.cityName}</h2>
              <Temperature celcius={props.weatherInfo.temp} />
            </div>
            <div class="col-4">
              <h3 id="current-time">
                {/*<FormattedDate date={props.weatherInfo.date} />*/}
              </h3>
              <p class="info" id="description">
                {props.weatherInfo.desc}
              </p>
              <p class="info" id="humidity">
                Precipitation: {Math.round(props.weatherInfo.humidity)}%
              </p>
              <p class="info" id="wind">
                Wind: {Math.round(props.weatherInfo.wind)}km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Waiting for your search...</h2>;
  }
}

