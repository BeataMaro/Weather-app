import styled from "styled-components";
import sky from "../../assets/dominik-schroder-unsplash.jpg";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100vw;
  height: 1000px;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  background: linear-gradient(
      45deg,
      rgba(9, 121, 112, 0.3) 0%,
      rgba(124, 167, 167, 0.4) 20%
    ),
    url(${sky});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.3);
`;
