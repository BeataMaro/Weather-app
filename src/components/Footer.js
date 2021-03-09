import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding-top: 1em;
  text-align: center;
  background-color: #333;

  & a {
    color: crimson;
  }

  & span {
    color: #bbb;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>Icons made by </span>
      <a href='https://www.freepik.com' title='Freepik'>
        Freepik
      </a>

      <p>
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
