import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  color: lightgrey;
`;

const WeatherData = ({ main, weather }) => {
  const { temp, pressure } = main;

  return (
    <StyledDetails>
      <p>temp: {temp.toFixed()}°C</p>
      <p>Pressure: {pressure}</p>
      {main && <p>{weather[0].description}</p>}
    </StyledDetails>
  );
};

export default WeatherData;
