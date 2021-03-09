import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds";

const StyledNav = styled.header`
  height: 20%;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledTitle>On Cloud Nine</StyledTitle>
      <Clouds />
    </StyledNav>
  );
};

export default Header;
