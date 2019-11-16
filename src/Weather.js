import i18n from 'i18next';
import k from "./i18n/keys";
import React, { useState } from 'react';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export function Weather() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState();

  const fetchWeather = () => {
    let url = 'https://api.openweathermap.org/data/2.5/weather?APPID=07168488295cf3fc8b2b59bab9ac2b3d&units=metric&q=' + city;

    fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      setItems(json);
      setIsLoaded(true);
    })
    .catch(error => console.log(error));
  };

  const handleChange = event => setCity(event.target.value);

  if (!isLoaded) {
    return (
      <div>
        <input type="text" placeholder="City" onChange={handleChange} onSubmit={fetchWeather} />
        <button onClick={fetchWeather}>{i18n.t(k.SUBMIT)}</button>
      </div>);

  } else {
    return (
      <div>
        <p>{i18n.t(k.TEMP)} {JSON.stringify(items.main.temp, null, 2)} °C</p>
        <p>{i18n.t(k.HUMIDITY)} {JSON.stringify(items.main.humidity, null, 2)} %</p>
        <input type="text" placeholder="City" onChange={handleChange} onSubmit={fetchWeather} />
        <button onClick={fetchWeather}>{i18n.t(k.SUBMIT)}</button>
        <p>{i18n.t(k.WIND)} {JSON.stringify(items.wind.speed, null, 2)} {i18n.t(k.SPEED)}</p>
        {items.rain && <p>{i18n.t(k.RAIN)} {JSON.stringify(items.rain["1h"], null, 2) || JSON.stringify(items.rain["3h"], null, 2)} mm</p>}
      </div>);

  }
}
