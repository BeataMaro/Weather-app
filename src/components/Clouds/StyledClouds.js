import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translate(-50%, -40%);
  }
  100% {
    transform: translate(100%, 0);
  }
`;

const swing = keyframes`
0% {
  transform: translate(20%, 40%);
}
50% {

  transform: translate(-10%, 60%);
}
75% {
  transform: translate(5%, 5%);
}
100% {
  transform: translate(30%, 30%);
}
`;

export const StyledClouds = styled.div`
  opacity: 0.3;
`;

export const StyledSVG = styled.img`
  width: 20%;
  animation: ${move} 4s infinite alternate;
  transition: 0.5s ease;

  &:nth-child(1) {
    width: 25%;
    animation: ${move} 5s infinite alternate;
  }
  &:nth-child(2) {
    width: 20%;
    animation: ${swing} infinite alternate 9s;
  }
  &:nth-child(3) {
    width: 10%;
    animation: ${move} 3s infinite alternate;
  }
  @media (min-width: 1200px) {
    &:nth-child(1) {
      width: 15%;
    }
    &:nth-child(2) {
      width: 10%;
    }
    &:nth-child(3) {
      width: 12%;
    }
  }
`;
