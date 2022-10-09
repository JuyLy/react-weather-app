import React, { useState, useEffect } from "react";
import DailyForecast from "./DailyForecast";
import "./DailyForecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="Forecast">
      <div className="weekdays" id="forecast">
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
         if (index < 5) {
          return (
            <div className="col" key={index}>
              <DailyForecast data={dailyForecast} />
            </div>
          );
         }
         return null;
        })}
        </div>
        </div>
        </div>
        );
      } else {
          let longitude = props.coordinates.lon;
          let latitude = props.coordinates.lat;
          let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=e3a777fc1d55e0a271349e7b53f228c1&units=metric`;
          axios.get(url).then(handleResponse)
        }
      }