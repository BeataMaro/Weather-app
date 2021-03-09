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

  let [count, setCount] = useState(600);
  let [place, setPlace] = useState("");

  useEffect(() => {
    setImage(`https://source.unsplash.com/collection/164639/600x${count}`);

    // setImage(`https://api.unsplash.com/search/photos?page=1&query=${place}`);

    // console.log(`useEffect ${image} ${place}`);
  }, [count]);

  const api_call = async (e) => {
    e.preventDefault();

    let location = e.target.elements.location.value;
    if (location) {
      const API_KEY = "704dc5526e3c3be52b1e69ad1e7c1ad9";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
      const request = await fetch(url);
      const response = await request.json();
      setWeather(response);
      setCount(count + 1);
      console.log(`count: ${count}`);
      setPlace(location);

      // setImage("https://source.unsplash.com/collection/4299432");
      // setImage(
      //   `https://api.unsplash.com/search/photos?page=1&query=${location}`
      // );
      setError(false);

      e.target.elements.location.value = "";
    } else {
      setWeather(null);
      setError(true);
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
