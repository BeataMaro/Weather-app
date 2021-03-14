import React from "react";
import styled from "styled-components";

import {
  StyledCardContainer,
  StyledCard,
  StyledFront,
  StyledBack,
} from "../WeatherCard/StyledWeatherCard";

const StyledErrorContainer = styled(StyledCardContainer)`
  margin: auto;
  display: grid;
  place-items: center;
  background-color: transparent;
  cursor: pointer;
`;
const StyledErrorCard = styled(StyledCard)`
  height: 400px;
`;
const StyledErrorFront = styled(StyledFront)`
  display: grid;
  place-items: center;
  & span {
    color: var(--primary);
  }
`;
const StyledErrorBack = styled(StyledBack)`
  & img {
    max-width: 100%;
  }
`;

const ErrorCard = ({ image }) => {
  const lostImg =
    "https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80";

  return (
    <StyledErrorContainer>
      <StyledErrorCard>
        <StyledErrorFront>
          <span>Please enter valid city name.</span>
        </StyledErrorFront>
        <StyledErrorBack>
          <img src={image} />
          <img src={lostImg} alt='man holding a map' />
        </StyledErrorBack>
      </StyledErrorCard>
    </StyledErrorContainer>
  );
};

export default ErrorCard;
