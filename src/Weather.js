import React, { useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function getData(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = `7fa2303eo545aaff0tfbf93c4ef484a6`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(getData);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a city"
          autoFocus
          onChange={changeCity}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}℃</li>
          <li>Feels like:{Math.round(weather.feelsLike)}℃</li>
          <li>Humidity:{weather.humidity}</li>
          <li>Wind:{weather.wind}km/h</li>
          <li>Description:{weather.description}</li>
        </ul>
        <img src={weather.icon} alt="" />
      </div>
    );
  } else {
    return (
      <div className="Lorder">
        {form}
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        ;
      </div>
    );
  }
}
