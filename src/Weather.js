import i18n from 'i18next';
import k from "./i18n/keys";
import moment from 'moment';
import React, { useState } from 'react';

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
    let url = 'https://api.openweathermap.org/data/2.5/weather?APPID=07168488295cf3fc8b2b59bab9ac2b3d&units=metric&q=' + city;

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
      <form onSubmit={fetchWeather}>
        <input type="text" placeholder={i18n.t(k.PLACEHOLDER)} onChange={handleChange} required/>
        <p>{errorMessage}</p>
        <button>{i18n.t(k.SUBMIT)}</button>
      </form>
      );

  } else {
    return (
      <form>
        <p>{items.name}</p>
        <p>{moment().utcOffset(items.timezone/60).format("LT").toString()}</p>
        <p>{i18n.t(k.TEMP)} {items.main.temp} °C</p>
        <p>{i18n.t(k.HUMIDITY)} {items.main.humidity} %</p>
        <input type="text" placeholder={i18n.t(k.PLACEHOLDER)} onChange={handleChange} onSubmit={fetchWeather} required/>
        <p>{errorMessage}</p>
        <button onClick={fetchWeather}>{i18n.t(k.SUBMIT)}</button>
        <p>{i18n.t(k.WIND)} {items.wind.speed} {i18n.t(k.SPEED)}</p>
        {items.rain && <p>{i18n.t(k.RAIN)} {items.rain["1h"] || items.rain["3h"]} mm</p>}
      </form>);

  }
}
