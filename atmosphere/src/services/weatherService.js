import axios from 'axios';

const API_KEY = '9f05d72e6c2bfc8e194b0c9fac53dff7'; // OpenWeatherMap API key
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
