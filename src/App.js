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
        <a href="https://github.com/JuyLy/react-weather-app">
          open-sounded on CitHub
        </a>
        {""} and {""}
        <a href="https://remarkable-blancmange-040ff6.netlify.app/">
          hosted on Netlify
        </a>
      </h5>
    </div>
  );
}
