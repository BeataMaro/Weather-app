import React from "react";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
  width: 60%;
  margin: auto;
`;

const StyledInput = styled.input`
  padding: 20px;
  width: 60%;
  height: 25px;
  margin: 0 auto;
  border: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  letter-spacing: 4px;
  flex: 1;
  &:focus {
    outline: none;
    border: 1.5px solid grey;
  }
`;

const StyledButton = styled.button`
  width: 100px;
  height: 70px;
  margin-left: 1em;
  padding: 5px 1px;
  outline: none;
  border: none;
  color: lightgrey;
  border-radius: 10px;
  font-size: 1rem;
  background-color: crimson;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    animation: ${grow} 1s alternate;
    background-color: #ddd;
    color: #333;
  }
`;

const WeatherSearch = ({ api_call }) => {
  console.log(api_call);

  return (
    <form onSubmit={api_call}>
      <StyledSearch>
        <StyledInput type='text' name='location' placeholder='location' />
        <StyledButton>&rarr;</StyledButton>
      </StyledSearch>
      {/* <FontAwesomeIcon icon='coffee' /> */}
      <i className='fas fa-search-location'></i>
    </form>
  );
};

export default WeatherSearch;
