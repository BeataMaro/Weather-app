import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds";

const StyledNav = styled.header`
  height: 10%;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.2);
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
