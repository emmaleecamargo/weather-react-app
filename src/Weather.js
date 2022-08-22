import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.main.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `96a225160ee7bd59b386370f8dd55115`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>WorldWide Weather</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div>
              <input
                className="searching"
                id="city-input"
                type="search"
                placeholder="Search For Your City"
                autocomplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div>
              <input type="submit" value="🔎" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h2 id="date" className="time">
          {weatherData.date}
        </h2>
        <div className="card">
          <div>
            <h5 className="card-title" id="main-card-title">
              {city}
            </h5>
            <p className="card-text" id="main-card-description">
              Humidity: {weatherData.humidity}
              <br />
              Wind: {weatherData.wind}
            </p>
          </div>
          <ul>
            <li>{weatherData.temperature}</li>
            <li id="main-weather-description">{weatherData.description}</li>
            <li>
              <img
                src="http://openweathermap.org/img/wn/02n@2x.png"
                alt="Clear"
              />
            </li>
          </ul>
        </div>
        <div className="coded">
          <p>
            <a
              href="https://github.com/emmaleecamargo/weather-react-app"
              className="github"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Emmalee Camargo
          </p>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading";
  }
}
// <h2 className="forecast">5-Day Forecast</h2><div><div className="card"><div><h5 className="card-title">Monday</h5></div><ul><li>22℃</li><li>15℃</li><li><img src="http://openweathermap.org/img/wn/02n@2x.png" alt="" /></li></ul></div></div>
