import React from "react";

const WeatherData = ({ main, weather }) => {
  const { temp, pressure } = main;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  return (
    <div className='weather-details'>
      <p className='weather-detail'>temp: {temp}°C</p>
      <p className='weather-detail'>Pressure: {pressure}</p>
      {weatherIcon && <img src={weatherIcon} alt='weather-icon' />}
    </div>
  );
};

export default WeatherData;
