import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const grow = keyframes`
0% {
transform: scale(1);
}
50% {
transform: scale(1.2);
}
100% {
  transform: scale(1);
}
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const StyledInput = styled.input`
  padding: 20px;
  margin: 1em auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  letter-spacing: 4px;
  flex: 1;
  z-index: 1000;
  &:focus {
    outline: none;
    border: 1.5px solid grey;
  }
  @media (min-width: 768px) {
    padding: 25px;
  }
`;

const StyledButton = styled.button`
  width: 70px;
  height: 50px;
  margin-left: 0.5em;
  padding: 5px 1px;
  outline: none;
  border: none;
  color: #ddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: orangered;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  z-index: 1000;

  &:hover {
    animation: ${grow} 1s alternate;
    background-color: #ddd;
    color: #333;
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 60px;
    margin-left: 1em;
  }
`;

const WeatherSearch = ({ api_call }) => {
  console.log(api_call);

  return (
    <form onSubmit={api_call}>
      <StyledSearch>
        <StyledInput type='text' name='location' placeholder='location' />
        <StyledButton>
          <FontAwesomeIcon icon={faSearchLocation} />
        </StyledButton>
      </StyledSearch>
    </form>
  );
};

export default WeatherSearch;
