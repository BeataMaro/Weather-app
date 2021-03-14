import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translate(-500px, 10%);
  }
  100% {
    transform: translate(100%, 0);
  }
`;

const swing = keyframes`
0% {
  /* transform: scaleX(1.8); */
  transform: translate(100px, 125px);
}
50% {
  transform: scaleX(.8);
  transform: translate(300px, 300px);
}
75% {
  transform: translate(200px, -105px);
}
100% {
  transform: translate(100px, 225px);
}
`;

export const StyledClouds = styled.div`
  opacity: 0.3;
`;

export const StyledSVG = styled.img`
  width: 20%;
  animation: ${move} 9s infinite alternate;
  transition: 0.5s ease;

  &:nth-child(1) {
    width: 250px;
    animation: ${move} 5s infinite alternate;
  }
  &:nth-child(2) {
    width: 220px;
    animation: ${swing} infinite alternate 9s;
  }
  &:nth-child(3) {
    width: 200px;
    animation: ${move} 3s infinite alternate;
  }
`;
