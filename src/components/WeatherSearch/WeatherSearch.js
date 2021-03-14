import React from "react";
import { StyledSearch, StyledInput, StyledButton } from "./StyledWeatherSearch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const WeatherSearch = ({ api_call }) => {
  console.log(api_call);

  return (
    <form onSubmit={api_call}>
      <StyledSearch>
        <StyledInput type='text' name='location' placeholder='location' />
        <StyledButton>
          <FontAwesomeIcon icon={faSearchLocation} />
        </StyledButton>
      </StyledSearch>
    </form>
  );
};

export default WeatherSearch;
