import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

import Weather from "./Weather.js";

export default function Search() {
  let [city, setCity] = useState("");
  function updateCity(event) {
    setCity(event.target.value);
  }
  let [temp, setTemp] = useState(null);
  function showTemp(response) {
    setTemp(response.data.main.temp);
  }

  let [humidity, setHumidity] = useState(null);
  function showHumidity(response) {
    setHumidity(response.data.main.humidity);
  }

  let [wind, setWind] = useState(null);
  function showWind(response) {
    setWind(response.data.wind.speed);
  }

  let [icon, setIcon] = useState(null);
  function showIcon(response) {
    setIcon(response.data.weather[0].icon);
  }

  let [loaded, setLoaded] = useState(false);
  function displayWeather(response) {
    setLoaded(true);
  }

  let [desc, setDesc] = useState(null);
  function showDesc(response) {
    setDesc(response.data.weather[0].description);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "cf1b1343a7207aa60910085fc2251ee5";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
    axios.get(apiUrl).then(showTemp);
    axios.get(apiUrl).then(showHumidity);
    axios.get(apiUrl).then(showWind);
    axios.get(apiUrl).then(showIcon);
    axios.get(apiUrl).then(showDesc);
  }

  return (
    <div className="row">
      <div className="col-6 search-col">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="search"
              onChange={updateCity}
              className="form-control"
              placeholder="Search City"
              autocomplete="off"
              autofocus="on"
              id="search-city-input"
            />
          </div>
        </form>
      </div>
      <div className="col-2">
        <button className="search" id="search-button">
          <span role="img" ariaLabel="search">
            🔍
          </span>
        </button>
      </div>
      <div class="col-2">
        <button className="search" id="location-button">
          <span role="img" ariaLabel="current location">
            📍
          </span>
        </button>
      </div>
      <Weather
        loaded={loaded}
        city={city}
        humidity={humidity}
        wind={wind}
        temp={temp}
        icon={icon}
        desc={desc}
      />
    </div>
  );
}
