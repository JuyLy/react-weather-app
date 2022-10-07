import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function DailyForecast(props) {
function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
}

function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
}

function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
}

return (
<div className="DailyForecast">
<h6>
 {day()}
</h6>
<div className="weather-forecast-temperature">
<span className="weather-forecast-temperature-max"> {maxTemperature()} </span>/
<span className="weather-forecast-temperature-min"> {minTemperature()} </span>
    </div>
    <p className="mt-2"><WeatherIcon code={props.data.weather[0].icon} size={42} /></p>
</div>
);
}