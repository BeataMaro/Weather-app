import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  width: 100%;
  background-color: lightgrey;
  padding: 1em;
  display: grid;
  place-items: center;
  box-shadow: 1px 0.5px 15px rgba(0, 0, 0, 0.2);

  & h2 {
    font-size: 1rem;
    color: var(--orange);
  }

  & p {
    color: #333;
  }
  & span {
    color: #1ac7e2;
    letter-spacing: 4px;
  }
`;

const WeatherData = ({ main, weather }) => {
  const { temp, pressure } = main || [];

  return (
    <StyledDetails>
      {temp && <h2>temp: {temp.toFixed()}°C</h2>}
      {!weather.length && <h2>I am lost.</h2>}
      {pressure && <p>Pressure: {pressure} hPa</p>}
      {main && <span>{weather[0].description}</span>}
    </StyledDetails>
  );
};

export default WeatherData;
