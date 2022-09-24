import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
<div class="weekdays" id="forecast">
<div className="row">
<div className="col-2">
<h6>
 Mon
</h6>
<div className="weather-forecast-temperature">
<span className="weather-forecast-temperature-max"> 12° </span>/
<span className="weather-forecast-temperature-min"> 5° </span>
    </div>
    <img
      src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-few-clouds.png"              alt="Icon"
      width="48"
    />
</div>
<div className="col-2 me-0">
<h6>
 Tue
</h6>
<div className="weather-forecast-temperature">
<span className="weather-forecast-temperature-max"> 13° </span>/
<span className="weather-forecast-temperature-min"> 10° </span>
    </div>
    <img
      src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-few-clouds.png"              alt="Icon"
      width="48"
    />
</div>
<div className="col-2">
<h6>
 Wed
</h6>
<div className="weather-forecast-temperature">
<span className="weather-forecast-temperature-max"> 14° </span>/
<span className="weather-forecast-temperature-min"> 9° </span>
    </div>
    <img
      src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-few-clouds.png"              alt="Icon"
      width="48"
    />
</div>
<div className="col-2">
<h6>
 Thu
</h6>
<div className="weather-forecast-temperature">
<span className="weather-forecast-temperature-max"> 8° </span>/
<span className="weather-forecast-temperature-min"> 5° </span>
    </div>
    <img
      src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-few-clouds.png"              alt="Icon"
      width="48"
    />
</div>
<div className="col-2">
<h6>
 Fri
</h6>
<div className="weather-forecast-temperature">
<span className="weather-forecast-temperature-max"> 18° </span>/
<span className="weather-forecast-temperature-min"> 10° </span>
    </div>
    <img
      src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-few-clouds.png"              alt="Icon"
      width="48"
    />
</div>
<div className="col-2">
<h6>
 Sat
</h6>
<div className="weather-forecast-temperature">
<span className="weather-forecast-temperature-max"> 15° </span>/
<span className="weather-forecast-temperature-min"> 8° </span>
    </div>
    <img
      src="https://www.iconattitude.com/icons/open_icon_library/status/png/256/weather-few-clouds.png"              alt="Icon"
      width="48"
    />
</div>
</div>
</div>
);
}