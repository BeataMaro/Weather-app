import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 1em;
  text-align: center;
  font-size: 0.8rem;
  background-color: #01130d;
  color: #484c47;
  letter-spacing: 0.5px;

  & a {
    color: var(--primary);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; Copyrights 2021</p>
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
      <span>
        {" "}
        | Photo by{" "}
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
      </span>
    </StyledFooter>
  );
};

export default Footer;
