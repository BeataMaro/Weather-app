import styled, { keyframes } from "styled-components";

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

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const StyledInput = styled.input`
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

export const StyledButton = styled.button`
  width: 70px;
  height: 50px;
  margin-left: 0.5em;
  padding: 5px 1px;
  outline: none;
  border: none;
  color: #ddd;
  border-radius: 10px;
  font-size: 1rem;
  background-color: var(--primary);
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
