import React from "react";
import styled, { keyframes } from "styled-components";
import cloud from "../assets/clouds.svg";

const swing = keyframes`
0% {
  transform: scaleX(1.2);
  transform: translate(100px, 125px);
}
50% {
  transform: scaleX(.8);
  transform: translate(300px, 100px);
}
100% {
  transform: scaleX(1);
  transform: translate(200px, -85px);
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
  width: 50px;
  height: 200px;
  animation: ${move} 9s infinite alternate;
  margin-left: 1em;
  transition: 0.5s ease-in;
  opacity: 0.7;

  &:nth-child(1) {
    width: 120px;
    animation: ${move} 4s infinite alternate;
  }
  &:nth-child(2) {
    width: 220px;
    animation: ${swing} infinite 3s alternate;
  }
  &:nth-child(3) {
    width: 90px;
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
