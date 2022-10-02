import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function Fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
        <strong className="temp" id="temp">
              {Math.round(props.celsius)}
            </strong>
        <span className="units">
              <a href="/#" id="celsius-link">
                °C{" "}
              </a>
              |
              <a href="/#" id="fahrenheit-link" onClick={showFahrenheit}>
                °F
              </a>
            </span>
            </div>
    );
  } else {
    return (
        <div className="WeatherTemperature">
        <strong className="temp" id="temp">
              {Math.round(Fahrenheit())}
            </strong>
        <span className="units">
              <a href="/#" id="celsius-link" onClick={showCelsius}>
                °C{" "}
              </a>
              |
              <a href="/#" id="fahrenheit-link">
                °F
              </a>
            </span>
            </div>
    );
  }
}