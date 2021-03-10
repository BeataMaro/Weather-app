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
  position: relative;
  border-radius: 40px;
  box-shadow: 1px 0.5px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.25s ease;
  cursor: pointer;
`;

export const StyledCardContainer = styled.div`
  align-self: center;
  background: transparent;
  border-radius: 40px;
  width: 350px;
  min-height: 500px;
  perspective: 1000px;
  overflow: hidden;

  &:hover ${StyledCard} {
    transform: rotateY(180deg);
    border-radius: 40px;
  }
`;

const StyledCardHeader = styled.div`
  background-color: orange;
  padding: 0.3em;
  min-height: 30%;
`;
export const StyledFront = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;

  & img {
    max-height: 70%;
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
  let [open, toggle] = useState(true);
  const { name, sys, weather = [{ icon: "" }], main } = weatherData || [];
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  let size = roll(400, 650, false);
  let randomImage = `https://source.unsplash.com/random/600x${size}`;

  useEffect(() => {
    const findImage = () => {
      weatherData &&
      image ===
        "https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80"
        ? (image = randomImage)
        : (image = image);
    };
    findImage();
    console.log(image);
  }, [image]);

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
              {main && <h2>{main.temp.toFixed()}°C</h2>}{" "}
              {weather[0].icon === "" && <h3>Are you sure?</h3>}
              {weather[0].icon !== "" && (
                <img src={weatherIcon} alt='weather-icon' />
              )}
            </div>
          </StyledCardHeader>
          {image && <img src={image} alt='' />}
          {/* {!image && <img src={image} alt='' />} */}
        </StyledFront>
        <StyledBack>
          {name && sys && (
            <h2>
              {name}, {sys.country}
            </h2>
          )}
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
