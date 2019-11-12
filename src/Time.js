import React, {useState, useEffect} from 'react';
import moment from 'moment';
import times from './strings/time.json';
import './css/Time.css';

export function Time() {
  const [timestamp, setTimestamp] = useState(sessionStorage.getItem("timestamp"));
  const [now, setNow] = useState(moment());

  useEffect((timestamp) => {
    if (!timestamp) {
      sessionStorage.setItem("timestamp", moment());
      setTimestamp(sessionStorage.getItem("timestamp"));
    }
    const interval = setInterval(() => {
      setNow(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return createFigures(timestamp, now);
}

function createFigures(timestamp, now) {
  const diff = now.diff(timestamp);
  const diffDuration = moment.duration(diff);

  return (
    <div className="Time">
    {
      times.map(((time, index) =>
        <figure key={index}>
          <i></i>
          <figcaption>{formatNumber(Math.round(time.value * (time.per === "m" ? diffDuration.asMinutes() : diffDuration.asSeconds())))} {time.type} {time.action}</figcaption>
        </figure>
      ))
    }
    </div>
  );
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
