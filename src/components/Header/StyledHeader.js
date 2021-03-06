import styled from "styled-components";

export const StyledNav = styled.header`
  height: 10em;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  align-self: center;
  font-family: "Fresh Orange";
  font-weight: 400;
  line-height: 0.5;
  font-size: 1.5rem;
  z-index: 1000;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
