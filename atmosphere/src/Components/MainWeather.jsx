import React from "react";
import "../assets/styles/MainWeather.css";
// 
function MainWeather({ weatherData }) {
    if (!weatherData) {
        return <div>Loading...</div>;
    }
// 
    const temperature = Math.round(weatherData.main.temp); // Temperature in Celsius
    const weatherDescription = weatherData.weather[0].description;
// 
    return (
        <div>
            <h1 className="text-[12rem] font-bold ml-[40rem] mt-20">{temperature}°</h1>
            <p className="text-3xl ml-[41rem] inline-block capitalize">{weatherDescription}</p>
        </div>
    )
}
// 
export default MainWeather;

