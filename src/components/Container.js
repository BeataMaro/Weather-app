import React from "react";
import styled from "styled-components";
import sky from "../assets/dominik-schroder-unsplash.jpg";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;

  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: canter;
  background-color: black;
  background-image: url(${sky});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.3);

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Container = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Container;
