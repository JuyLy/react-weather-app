import React from "react";
import "./App.css";

import Form from "./Form";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="weather-app">
            <Form />
            <Weather />
            <Forecast />
          </div>
        </div>
      </header>
      <h5>
        Coded by July Lystopadska and is {""}
        <a href="https://github.com/JuyLy/Weather-Apphttps://github.com/JuyLy/Weather-App-React">
          open-sounded on CitHub
        </a>
        {""} and {""}
        <a href="https://polite-longma-941a77.netlify.app/://app.netlify.com/teams/juyly/overview">
          hosted on Netlify
        </a>
      </h5>
    </div>
  );
}
