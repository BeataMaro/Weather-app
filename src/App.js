import "./App.css";
import React, { useState, useEffect } from "react";

//Components
import Container from "./components/Container.js";
import Header from "./components/Header";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  let [weather, setWeather] = useState(null);
  let [image, setImage] = useState("");
  let [error, setError] = useState(false);

  // let [count, setCount] = useState(600);

  // useEffect(() => {
  //   setImage(`https://source.unsplash.com/collection/164639/600x${count}`);
  // }, [count]);

  const api_call = async (e) => {
    e.preventDefault();

    let location = e.target.elements.location.value;
    if (location) {
      //OpenWeatherMap API
      const API_KEY = "704dc5526e3c3be52b1e69ad1e7c1ad9";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
      const request = await fetch(url);
      const response = await request.json();
      setWeather(response);

      //Unsplash API
      // setCount(count + 1);
      const API_KEY_UNSPLASH = "eyHVNRMWZ6iRzKziR8dKv22SFkh4FqV2YLZhLxcSjjs";
      const url_unsplash = `https://api.unsplash.com/search/photos?page=3&query=${location}&client_id=${API_KEY_UNSPLASH}`;
      const request_unsplash = await fetch(url_unsplash);
      const response_unsplash = await request_unsplash.json();
      const img_unsplash = response_unsplash.results[0].urls.small;
      setImage(img_unsplash);
      setError(false);
      e.target.elements.location.value = "";
    } else {
      setWeather(null);
      setError(true);
      setImage(
        "https://images.unsplash.com/photo-1495249346844-83e18c90a511?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80"
      );
    }
  };

  return (
    <Container>
      <Header />
      <WeatherSearch api_call={api_call} />

      {weather && image && <WeatherCard weatherData={weather} image={image} />}
      {error && <ErrorMessage />}

      <Footer />
    </Container>
  );
};

export default App;
