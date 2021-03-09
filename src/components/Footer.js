import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 1em 0;
  text-align: center;
  font-size: 0.8rem;
  background-color: #123e2f;
  color: #bbb;

  & a {
    color: orangered;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      Icons made by{" "}
      <span>
        <a href='https://www.freepik.com' title='Freepik'>
          Freepik
        </a>
      </span>{" "}
      |{" "}
      <span>
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </span>
      <p>
        Photo by{" "}
        <span>
          <a href='https://unsplash.com/@wirhabenzeit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Dominik Schröder
          </a>
        </span>{" "}
        on{" "}
        <span>
          <a href='/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
            Unsplash
          </a>
        </span>
      </p>
    </StyledFooter>
  );
};

export default Footer;
