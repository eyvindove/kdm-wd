import { useLocation, useNavigate } from "react-router-dom";
import { getForecast } from "@src/services/api";
import { useEffect } from "react";
import { useState } from "react";

export default function WeatherInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location?.state;
  const city = locationState?.city;

  const [forecast, setForecast] = useState(null);

  async function getCurrentForecast(city) {
    const res = await getForecast({
      latitude: city.latitude,
      longitude: city.longitude,
    });
    setForecast(res);
  }

  useEffect(() => {
    if (!locationState) {
      navigate("/");
    }

    getCurrentForecast(city);
  }, []);

  return (
    <div>
      <div>WeatherInfoPage</div>
      <div>{city.name}</div>
      <div>{forecast?.current?.temperature_2m}</div>
      <div>{forecast?.current?.weather_code}</div>
      <div>{forecast?.current?.wind_speed_10m}</div>
      <div>{forecast?.current?.relative_humidity_2m}</div>
    </div>
  );
}
