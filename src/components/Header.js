import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds";

const StyledNav = styled.header`
  height: 20%;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
  letter-spacing: 2px;
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledTitle>On Cloud Nine - the Weather App</StyledTitle>
      <Clouds />
    </StyledNav>
  );
};

export default Header;
