import React, { useState } from 'react';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


export function Demo() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState();

  const fetchWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?APPID=07168488295cf3fc8b2b59bab9ac2b3d&units=metric&q=' + city)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        setIsLoaded(true);
        setItems(json.main);
      })
      .catch(error => console.log(error));
  };

  const handleChange = event => setCity(event.target.value);

  if (!isLoaded) {
    return (
      <div>
        <input type="text" placeholder="City" onChange={handleChange}/>
        <button onClick={fetchWeather}>Submit</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Temp: {JSON.stringify(items.temp, null, 2)}°C</p>
        <p>Humidity: {JSON.stringify(items.humidity, null, 2)}%</p>
      </div>
    );
  }
}
