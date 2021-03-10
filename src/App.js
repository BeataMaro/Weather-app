import "./App.css";
import React, { useState } from "react";
import env from "react-dotenv";

//Components
import Container from "./components/Container.js";
import Header from "./components/Header";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

import ErrorCard from "./components/ErrorCard";

import { roll } from "./utils/roll";

const App = () => {
  let [weather, setWeather] = useState(null);
  let [image, setImage] = useState("");
  let [description, setDescription] = useState("");
  let [error, setError] = useState(false);

  const api_call = async (e) => {
    e.preventDefault();

    let location = e.target.elements.location.value;
    if (location) {
      //OpenWeatherMap API
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${env.API_KEY}&units=metric`;
        const request = await fetch(url);
        const response = await request.json();
        setWeather(response);
        //Unsplash API
        const url_unsplash = `https://api.unsplash.com/search/photos?page=3&query=${location}&client_id=${env.ACCESS_KEY}`;
        const request_unsplash = await fetch(url_unsplash);
        const response_unsplash = await request_unsplash.json();
        const arrLength = response_unsplash.results.length;
        let index = roll(0, arrLength, false);
        const img_unsplash = response_unsplash.results[index].urls.small;
        const img_description = response_unsplash.results[index].description;

        setImage(img_unsplash);
        setDescription(img_description);
        setError(false);
        e.target.elements.location.value = "";
      } catch (e) {
        console.log(`error: ${e.message}`);
        setError(true);
        setImage(
          // "https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80"

          "https://source.unsplash.com/random"
        );
        setDescription("");
      }
    } else {
      setError(true);
      setWeather(null);
    }
  };

  return (
    <Container>
      <Header />
      <WeatherSearch api_call={api_call} />

      {weather && image && (
        <WeatherCard
          weatherData={weather}
          image={image}
          description={description}
        />
      )}
      {error && !weather && <ErrorCard image={image} />}
      {/* <div>{env.API_KEY}</div> */}
      {/* <div>{window.env.API_KEY}</div> */}
      <Footer />
    </Container>
  );
};

export default App;
