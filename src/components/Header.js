import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds";

const StyledNav = styled.header`
  height: 20%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.div`
  align-self: center;
  /* margin: 0 2em; */
  font-family: "Fresh Orange";
  font-weight: 400;
  line-height: 0.5;
  font-size: 1.5rem;

  & h1,
  h2 {
    display: block;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledTitle>
        <h1>On Cloud Nine -</h1> <h2>the Weather App</h2>
      </StyledTitle>
      <Clouds />
    </StyledNav>
  );
};

export default Header;
