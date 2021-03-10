import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  color: #333;
`;

const WeatherData = ({ main, weather }) => {
  const { temp, pressure } = main || [];

  return (
    <StyledDetails>
      {temp && <h2>temp: {temp.toFixed()}°C</h2>}
      {pressure && <p>Pressure: {pressure}</p>}
      {main && <p>{weather[0].description}</p>}
    </StyledDetails>
  );
};

export default WeatherData;
