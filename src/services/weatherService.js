import axios from "axios";

const KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city) {
  const res = await axios.get(`${BASE}/weather`, {
    params: {
      q: city,
      units: "metric",
      appid: KEY,
    },
  });
  return res.data;
}

export async function getForecast(city) {
  const res = await axios.get(`${BASE}/forecast`, {
    params: {
      q: city,
      units: "metric",
      appid: KEY,
    },
  });
  return res.data;
}