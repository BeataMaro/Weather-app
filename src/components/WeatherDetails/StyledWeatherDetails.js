import styled from "styled-components";

export const StyledDetails = styled.div`
  width: 100%;
  background-color: lightgrey;
  padding: 1em;
  display: grid;
  place-items: center;
  font-weight: 700;

  & h2 {
    font-size: 1.3rem;
    color: var(--primary);
  }

  & span {
    display: block;
    margin-bottom: 1em;
    color: white;
    background-color: var(--orange);
    border-radius: 20px;
    padding: 12px;
    letter-spacing: 2px;
  }
`;
