import React from "react";
import { StyledDetails } from "./StyledWeatherDetails";

const WeatherData = ({ main, weather }) => {
  const { temp, pressure } = main || [];

  return (
    <StyledDetails>
      {temp && (
        <span>
          <h2>temp: {temp.toFixed()}°C</h2>
        </span>
      )}
      {!weather.length && <h2>I am lost.</h2>}
      {pressure && <span>Pressure: {pressure} hPa</span>}
      {main && <span>{weather[0].description}</span>}
    </StyledDetails>
  );
};

export default WeatherData;
