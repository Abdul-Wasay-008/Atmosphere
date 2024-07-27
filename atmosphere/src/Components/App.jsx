import React from 'react';
import Header from './Header';
import MainWeather from './MainWeather';
import Statistics from './Statistics';
import RightSideBar from './RightSideBar';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <MainWeather />
      <Statistics />
      <RightSideBar />
      <Footer />
    </div>
  );
}

export default App;
