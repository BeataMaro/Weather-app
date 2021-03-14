import React from "react";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; Copyrights 2021</p>
      Icons made by{" "}
      <span>
        <a href='https://www.freepik.com' title='Freepik' target='_blank'>
          Freepik
        </a>
      </span>{" "}
      |{" "}
      <span>
        <a href='https://www.flaticon.com/' title='Flaticon' target='_blank'>
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
