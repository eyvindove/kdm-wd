import { axiosInstance } from "@src/libs/axios";

export const getSearch = ({ name }) =>
  axiosInstance({
    method: "get",
    url: "/search",
    params: {
      name,
      count: 5,
      language: "en",
      format: "json",
    },
  });

export const getForecast = async ({ latitude, longitude }) =>
  axiosInstance({
    method: "get",
    url: "https://api.open-meteo.com/v1/forecast",
    params: {
      latitude,
      longitude,
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "weather_code",
        "wind_speed_10m",
      ].join(","),
      daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"].join(
        ",",
      ),
      timezone: "Asia/Singapore",
    },
  });
