import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.3);
`;

const Container = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Container;
