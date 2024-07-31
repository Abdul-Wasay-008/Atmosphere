import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY; // OpenWeatherMap API key
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(WEATHER_BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric' // Ensure the temperature is in Celsius
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
console.log('API Key:', process.env.REACT_APP_OPENWEATHER_API_KEY);

