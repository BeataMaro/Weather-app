import React from "react";
import { StyledNav, StyledTitle } from "./StyledHeader";
import Clouds from "../Clouds/Clouds";

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
