import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form className="search-form" id="search-form" />
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Type a city.."
            autofocus="on"
            autocomplete="off"
            id="city-input"
            className="form-control shadow-sm"
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
    </div>
  );
}
