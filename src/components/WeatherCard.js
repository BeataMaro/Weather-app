import React, { useState, useEffect } from "react";
import WeatherDatails from "./WeatherDatails";
import styled, { keyframes } from "styled-components";

import { roll } from "../utils/roll";

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const StyledCard = styled.div`
  border-radius: 20px;
  box-shadow: 1px 0.5px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ddd;
  transform-style: preserve-3d;
  transition: transform 0.3s ease-in-out;
`;

export const StyledCardContainer = styled.div`
  align-self: center;
  position: relative;
  background: transparent;
  width: 350px;
  min-height: 500px;
  margin: 2em;
  perspective: 1000px;
  overflow: hidden;

  &:hover ${StyledCard} {
    transform: rotateY(180deg);
  }
`;

const StyledCardHeader = styled.div`
  background-color: orange;
`;
export const StyledFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  & img {
    max-height: 100%;
  }
  & > h1 {
    color: crimson;
  }
  & > h2 {
    color: yellow;
    font-size: 2rem;
  }
  & > h3 {
    color: lightgray;
    font-weight: 100;
  }
`;

export const StyledBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  & p {
    width: 80%;
    line-height: 1.8;
  }
`;

const StyledButton = styled.button`
  padding: 0.7em 1em;
  font-size: 1rem;
  border-radius: 20px;
  border: 0.1px solid grey;
  outline: none;
  transition: all 0.13s ease-in;
  cursor: pointer;

  &:hover {
    color: royalblue;
    animation: ${shake} 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  &:active {
    border: 2px solid royalblue;
  }
`;

const WeatherCard = ({ weatherData, image, description }) => {
  let [open, toggle] = useState(false);
  // let [random, setRandom] = useState(null);
  const { name, sys, weather = [], main } = weatherData;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  let size = roll(400, 650, false);
  let randomImage = `https://source.unsplash.com/random/600x${size}`;
  let picture = null;

  useEffect(() => {
    const findImage = () => {
      picture =
        weatherData &&
        image ===
          "https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80"
          ? randomImage
          : image;
    };
    findImage();
  }, []);

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
            {name && (
              <h1>
                {name}, {sys.country}
              </h1>
            )}
            <div>
              <h2>{main.temp.toFixed()}°C</h2>{" "}
              {weatherIcon && <img src={weatherIcon} alt='weather-icon' />}
            </div>
          </StyledCardHeader>
          {image && <img src={image} alt='' />}
          {!image && <img src={picture} alt='' />}
        </StyledFront>
        <StyledBack>
          <h2>{name}</h2>
          {description && <p>{description}</p>}
          {open && <WeatherDatails main={main} weather={weather} />}
          {!open && (
            <StyledButton onClick={toggleDetails}>&#129043;</StyledButton>
          )}
          {open && (
            <StyledButton onClick={toggleDetails}>&#129041;</StyledButton>
          )}
        </StyledBack>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default WeatherCard;
