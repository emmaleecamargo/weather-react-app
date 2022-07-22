import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>WorldWide Weather</h1>
      <form>
        <div className="row">
          <div>
            <input
              className="searching"
              id="city-input"
              type="search"
              placeholder="Search For Your City"
              autocomplete="off"
            />
          </div>
          <div>
            <input type="submit" value="🔎" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2 id="date" className="time">
        Monday June 27 04:15 PM
      </h2>
      <div className="card">
        <div>
          <h5 className="card-title" id="main-card-title">
            Lisbon
          </h5>
          <p className="card-text" id="main-card-description">
            Humidity: 40%
            <br />
            Wind: 10 km/h
          </p>
        </div>
        <ul>
          <li>20℃</li>
          <li id="main-weather-description"></li>
          <li>
            <img
              src="http://openweathermap.org/img/wn/02n@2x.png"
              alt="Clear"
            />
          </li>
        </ul>
      </div>
      <h2 className="forecast">5-Day Forecast</h2>
      <div>
        <div className="card">
          <div>
            <h5 className="card-title">Monday</h5>
          </div>
          <ul>
            <li>22℃</li>
            <li>15℃</li>
            <li>
              <img src="http://openweathermap.org/img/wn/02n@2x.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="coded">
        <p>
          <a
            href="https://github.com/emmaleecamargo/weather-react-app"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          by Emmalee Camargo
        </p>
      </div>
    </div>
  );
}
