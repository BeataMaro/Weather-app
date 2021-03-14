import React from "react";
import { StyledWrapper } from "./StyledContainer";

const Container = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Container;
