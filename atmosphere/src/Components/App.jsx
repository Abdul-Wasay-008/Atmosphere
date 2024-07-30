import React, { useState, useEffect } from 'react';
import Header from './Header';
import MainWeather from './MainWeather';
import RightSideBar from './RightSideBar';
import Statistics from './Statistics';
import Footer from './Footer';
import '../assets/styles/App.css';
import { getWeatherByCity } from '../services/weatherService';

function App() {
  const [city, setCity] = useState(''); // State for the city input
  const [weather, setWeather] = useState(null); // State for weather data
  const [error, setError] = useState(null); // State for error messages

  // Function to fetch weather data based on the city name
  const fetchWeather = async (cityName) => {
    try {
      const weatherData = await getWeatherByCity(cityName);
      setWeather(weatherData); // Update weather data state
      setError(null); // Clear any previous errors
    } catch (error) {
      setWeather(null); // Clear previous weather data
      setError('Failed to fetch weather data'); // Set error message
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  // Function to handle city name change
  const handleCityChange = (newCity) => {
    console.log("City name being passed from the header component:", newCity);
    setCity(newCity);
  };

  return (
    <div className="App">
      <Header onCityChange={handleCityChange} />
      <MainWeather weatherData={weather} />
      <Statistics weatherData={weather} />
      <RightSideBar weatherData={weather} />
      <Footer />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
