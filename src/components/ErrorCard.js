import React from "react";
import styled from "styled-components";
import {
  StyledCardContainer,
  StyledCard,
  StyledFront,
  StyledBack,
} from "./WeatherCard";

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
const StyledErrorFront = styled(StyledFront)``;
const StyledErrorBack = styled(StyledBack)``;

const ErrorCard = ({ image }) => {
  return (
    <StyledErrorContainer>
      <StyledErrorCard>
        <StyledErrorFront>
          <img src={image} />
        </StyledErrorFront>
        <StyledErrorBack>
          <span>Please enter valid city name.</span>
        </StyledErrorBack>
      </StyledErrorCard>
    </StyledErrorContainer>
  );
};

export default ErrorCard;
