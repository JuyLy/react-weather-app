import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./Form.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function Search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3a777fc1d55e0a271349e7b53f228c1&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
    <div className="Form">
      <form className="search-form ms-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Type a city.."
            autofocus="on"
            autocomplete="off"
            id="city-input"
            className="form-control shadow-sm"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Search"
            id="btn"
            className="form-control btn btn-primary shadow-sm"
          />
        </div>
      </div>
      </form>
      <Weather data={weatherData} />
      <Forecast coordinates={weatherData.coordinates} />
    </div>
  );
} else {
  Search();
  return "Loading...";
}
}