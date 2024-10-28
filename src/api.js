// src/api.js
import axios from 'axios';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true';

export const fetchWeather = async () => {
  try {
    const response = await axios.get(WEATHER_API_URL);
    return response.data.current_weather;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
