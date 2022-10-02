import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";


export default function Weather(props) {
  return (
    <div className="Weather">
      <div>
        <ul>
          <li>
            <h1 className="city" id="city">
              {props.data.city}
            </h1>
          </li>
          <li className="date">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="weather" id="weather">
            {props.data.description}
          </li>
        </ul>
      </div>
      <div className="row" style={{ width: 700 + `px` }}>
        <div className="col-4">
          <div className="clearfix weather-temperature">
            <span className="icon">
            <WeatherIcon code={props.data.icon} size={52} />
            </span>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-3 components">
          Humidity: {props.data.humidity}%
        </div>
        <div className="col-3 components">
          Wind: {Math.round(props.data.wind)} km/h
        </div>
      </div>
    </div>
  );
}
