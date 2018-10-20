import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css'
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from './../../../constants/weathers';
const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstore",
  [DRIZZLE]: "day-showers",
}

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  if(icon)
    return <WeatherIcons name={icon} size="4x" />;
  else {
    return <WeatherIcons name={SUN} size="4x" />;
  }
}

const WeatherTemperature = ({ temperature, weatherState }) => (

    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{ `${temperature} C° `}</span>
    </div>

);

export default WeatherTemperature;
