import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <ul>
          <li>
            <h1 className="city" id="city">
              Kyiv
            </h1>
          </li>
          <li className="date">Friday 14:00</li>
          <li className="weather" id="weather">
            few clouds
          </li>
        </ul>
      </div>
      <div className="row" style={{ width: 700 + `px` }}>
        <div className="col-4">
          <div className="clearfix weather-temperature">
            <img
              src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-few-clouds.png"
              alt="Clear"
              id="icon"
              className="float-left"
            />
            <strong className="temp" id="temp">
              20
            </strong>
            <span className="units">
              <a href="#" id="celsius-link">
                °C{" "}
              </a>
              |
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
        <div className="col-3 components">
          Humidity: <span id="humidity"></span> 43%
        </div>
        <div className="col-3 components">
          Wind: <span id="wind"></span> 1km/h
        </div>
      </div>
    </div>
  );
}
