import { useState } from "react";
import { getCurrentWeather, getForecast } from "@/services/weatherService";
import { summarizeForecast, generateAlerts } from "@/utils/forecastUtils";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import Alerts from "./Alerts";
import MapView from "./MapView";

export default function Dashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [summary, setSummary] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchedCity) => {
    setCity(searchedCity);
    setLoading(true);
    setError("");
    try {
      const [w, f] = await Promise.all([
        getCurrentWeather(searchedCity),
        getForecast(searchedCity),
      ]);
      setWeather(w);
      setForecast(f);
      setSummary(summarizeForecast(f.list));
      setAlerts(generateAlerts(w, f));
    } catch (err) {
      setError("City not found or API error");
      setWeather(null);
      setForecast(null);
      setSummary([]);
      setAlerts([]);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <Search onSearch={handleSearch} />

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {weather && (
        <>
          <WeatherCard data={weather} />
          <Alerts alerts={alerts} />
          <Forecast days={summary} />
          <MapView
            lat={weather.coord.lat}
            lon={weather.coord.lon}
            name={weather.name}
          />
        </>
      )}
    </div>
  );
}
