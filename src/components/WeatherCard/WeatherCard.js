import React, { useState } from "react";
import {
  StyledCardContainer,
  StyledCard,
  StyledButton,
  StyledFront,
  StyledCardHeader,
  StyledBack,
} from "./StyledWeatherCard";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const WeatherCard = ({ weatherData, image, description }) => {
  let [open, toggle] = useState(true);
  const { name, sys, weather = [{ icon: "" }], main } = weatherData || [];
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const lostImg =
    "https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80";

  const toggleDetails = () => {
    if (weather && sys) {
      toggle(!open);
    } else {
      return;
    }
  };

  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledFront>
          <StyledCardHeader>
            {name && <h1>{name}</h1>}
            <div>
              {main && <h2>{main.temp.toFixed()}°C</h2>}
              {weather[0].icon === "" && <h3>Try searching again</h3>}
              {weather[0].icon !== "" && (
                <img src={weatherIcon} alt='weather-icon' />
              )}
            </div>
          </StyledCardHeader>
          {image && <img src={image} alt='' />}
        </StyledFront>
        <StyledBack>
          {name && sys && (
            <h2>
              {name}, {sys.country}
            </h2>
          )}
          {description && <p>{description}</p>}
          {open && <WeatherDetails main={main} weather={weather} />}
          {!open && main && (
            <StyledButton onClick={toggleDetails}>&#8595;</StyledButton>
          )}
          {open && main && (
            <StyledButton onClick={toggleDetails}>&#8593;</StyledButton>
          )}

          {weather[0].icon === "" && <img src={lostImg} />}
        </StyledBack>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default WeatherCard;
