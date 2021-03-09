import React from "react";
import styled, { keyframes } from "styled-components";
import cloud from "../assets/clouds.svg";

const swing = keyframes`
0% {
  /* transform: scaleX(1.8); */
  transform: translate(100px, 125px);
}
50% {
  /* transform: scaleX(.8); */
  transform: translate(300px, 100px);
}
75% {
  transform: translate(200px, -85px);
}
100% {
  transform: translate(100px, 125px);
}
`;

const move = keyframes`
  0% {
    transform: translate(-500px, 10%);
  }
  100% {
    transform: translate(100%, 0);
  }
`;

const StyledNav = styled.header`
  height: 50%;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.2);
`;

const StyledSVG = styled.img`
  width: 270px;
  animation: ${move} 9s infinite alternate;
  margin-left: 1em;
  transition: 0.5s ease-in;
  opacity: 0.2;

  &:nth-child(1) {
    width: 250px;
    animation: ${move} 5s infinite alternate;
  }
  &:nth-child(2) {
    width: 220px;
    animation: ${swing} infinite 9s;
  }
  &:nth-child(3) {
    width: 200px;
    animation: ${move} 3s infinite alternate;
  }
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledSVG src={cloud} />
      <StyledSVG src={cloud} />
      <StyledSVG src={cloud} />
      <StyledSVG src={cloud} />
      <StyledTitle>On Cloud Nine</StyledTitle>
    </StyledNav>
  );
};

export default Header;
