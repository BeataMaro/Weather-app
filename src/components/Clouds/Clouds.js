import React from "react";
import cloud from "../../assets/clouds.svg";
import { StyledClouds, StyledSVG } from "./StyledClouds";

const Clouds = () => {
  return (
    <StyledClouds>
      <StyledSVG src={cloud} />
      <StyledSVG src={cloud} />
      <StyledSVG src={cloud} />
      <StyledSVG src={cloud} />
    </StyledClouds>
  );
};

export default Clouds;
