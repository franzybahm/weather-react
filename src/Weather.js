import React from "react";
import "./styles.css";

import FormattedDate from "./FormattedDate.js";

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
              <h1 id="current-temp">{Math.round(props.weatherInfo.temp)}°C</h1>
            </div>
            <div class="col-4">
              <h3 id="current-time">
                <FormattedDate date={props.weatherInfo.date} />
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
/* if (props.temp) {
    return (
      <div class="row">
        <div class="col-10 shadow p-3 mb-5 bg-body rounded current-weather">
          <div class="row">
            <div class="col-4 big-weather">
              <img
                src="https://openweathermap.org/img/wn/01d@4x.png"
                alt="sunny"
                id="weather-icon"
              ></img>
            </div>
            <div class="col-4">
              <h2 id="current-city">{props.city}</h2>
              <h1 id="current-temp">{Math.round(props.temp)}°C</h1>
            </div>
            <div class="col-4">
              <h3 id="current-time">Sunday, 10:00</h3>
              <p class="info" id="description">
                Sunny
              </p>
              <p class="info" id="humidity">
                Precipitation: {Math.round(props.humidity)}%
              </p>
              <p class="info" id="wind">
                Wind: {Math.round(props.wind)}km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Waiting for your input...</h2>;
  }
}*/
