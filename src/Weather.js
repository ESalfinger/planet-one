import i18n from 'i18next';
import k from "./i18n/keys";
import moment from 'moment';
import React, { useState } from 'react';
import './css/weather.css';
import search from './icons/search.svg';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(i18n.t(k.ERRORMESSAGE));
  }
  return response;
}

export function Weather() {
  const [items, setItems] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState();
  const [errorMessage, setErrorMessage] = useState("")

  const fetchWeather = (event) => {
    event.preventDefault();
    let url = 'https://api.openweathermap.org/data/2.5/weather?APPID=07168488295cf3fc8b2b59bab9ac2b3d&units=' + i18n.t(k.UNITS) + '&q=' + city;

    fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      setErrorMessage("");
      setItems(json);
      setIsLoaded(true);
    })
    .catch(error => setErrorMessage(error.message));
  };

  const handleChange = event => setCity(event.target.value);

  if (!isLoaded) {
    return (
      <form onSubmit={fetchWeather} className = "weather-search">
        <div className = "weather-initial-bar">
          <p className = "weather-error">{errorMessage}</p>
          <input className = "weather-input" id="search" type="text" placeholder={i18n.t(k.PLACEHOLDER)} onChange={handleChange} required/>
          <label className = "weather-label" htmlFor="search">{i18n.t(k.LABEL)}</label>
        </div>
        <button className = "weather-button">{i18n.t(k.SUBMIT)}</button>
      </form>
      );

  } else {
    return (
      <form className = "weather-result">
        <div className = "weather-card">
          <div className = "weather-again">
            <div className = "weather-search-bar">
              <p className = "weather-error">{errorMessage}</p>
              <input className = "weather-input" id="search" type="text" placeholder={i18n.t(k.PLACEHOLDER)} onChange={handleChange} onSubmit={fetchWeather} required/>
              <label className = "weather-label" htmlFor="search">{i18n.t(k.LABEL)}</label>
            </div>
            <button className = "weather-button icon" onClick={fetchWeather}><img alt="search" src={search}></img></button>
          </div>
          <div className = "weather-values">
            <div className = "weather-location">
              <p className = "weather-location-name">{items.name}, {items.sys.country}</p>
              <p className = "weather-location-time">{i18n.t(k.TIME)} {moment().utcOffset(items.timezone/60).format("LT").toString()}</p>
            </div>
            <div className = "weather-value">
              <p className = "weather-value-key">{i18n.t(k.TEMP)}</p>
              <p>{items.main.temp} °{i18n.t(k.UNITTEMP)}</p>
            </div>
            <div className = "weather-value">
              <p className = "weather-value-key">{i18n.t(k.HUMIDITY)}</p>
              <p>{items.main.humidity} %</p>
            </div>
            <div className = "weather-value">
              <p className = "weather-value-key">{i18n.t(k.WIND)}</p>
              <p>{items.wind.speed} {i18n.t(k.UNITSPEED)}</p>
            </div>
            {items.rain && 
            <div className = "weather-value">
              <p className = "weather-value-key">{i18n.t(k.RAIN)}</p>
              <p>{items.rain["1h"] || items.rain["3h"]} mm</p>
            </div>
            }
          </div>
        </div>
        <div className = "weather-video">
            <p className = "wather-video-name">{items.name}, {items.sys.country}</p>
        </div>
      </form>);
  }
}
