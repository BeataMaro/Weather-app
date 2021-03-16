import styled, { keyframes } from "styled-components";

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const StyledCard = styled.div`
  position: relative;
  border-radius: 40px;
  box-shadow: 1px 0.5px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.25s ease;
  cursor: pointer;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
`;

export const StyledCardContainer = styled.div`
  align-self: center;
  background: transparent;
  margin: 2em 0;
  border-radius: 40px;
  width: 350px;
  min-height: 600px;
  perspective: 1000px;
  overflow: hidden;

  &:hover ${StyledCard} {
    transform: rotateY(180deg);
    border-radius: 40px;
  }

  @media (max-width: 360px) {
    width: 320px;
  }

  @media (max-width: 768px) {
    &:hover ${StyledCard}, &:active ${StyledCard} {
      transform: rotateY(180deg);
      border-radius: 40px;
    }
  }
`;

export const StyledCardHeader = styled.div`
  background-color: var(--orange);
  color: var(--skyblue);
  padding: 0.3em;
  min-height: 30%;
  letter-spacing: 2px;

  & h2 {
    color: var(--primary);
  }
`;
export const StyledFront = styled.div`
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateX(0deg);
  border-radius: 20px;

  & img {
    max-height: 80%;
  }
  & > h1 {
    color: crimson;
  }
  & > h2 {
    color: yellow;
    font-size: 2rem;
  }
  & > h3 {
    color: lightgray;
    font-weight: 100;
  }
`;

export const StyledBack = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  place-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  & p {
    width: 80%;
    line-height: 1.6;
  }
`;

export const StyledButton = styled.button`
  padding: 0.7em 1em;
  font-size: 1rem;
  border-radius: 20px;
  border: 0.1px solid grey;
  outline: none;
  transition: all 0.13s ease-in;
  cursor: pointer;

  &:hover {
    color: royalblue;
    animation: ${shake} 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  &:active {
    border: 2px solid royalblue;
  }
`;
