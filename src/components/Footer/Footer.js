import React from "react";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; Copyrights 2021</p>
      <div>
        <span>
          Icons made by{" "}
          <a href='https://www.freepik.com' rel='noreferrer' title='Freepik' target='_blank'>
            Freepik
          </a>
        </span>{" "}
        |{" "}
        <span>
          <a href='https://www.flaticon.com/' rel='noreferrer' title='Flaticon' target='_blank'>
            www.flaticon.com
          </a>
        </span>
      </div>

      <div>
        {"  "}
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
      </div>
    </StyledFooter>
  );
};

export default Footer;
