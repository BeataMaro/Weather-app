import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
  padding: 2rem;
  & span {
    color: crimson;
    letter-spacing: 2px;
  }
`;

const ErrorMessage = () => {
  return (
    <div>
      <StyledError>
        <span>Please enter city name.</span>
      </StyledError>
    </div>
  );
};

export default ErrorMessage;
