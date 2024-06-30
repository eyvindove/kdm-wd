import axios from "axios";

const OPEN_METEO_API_URL = "https://geocoding-api.open-meteo.com/v1";

const apiBaseUrl = OPEN_METEO_API_URL;

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.info("[axiosInstance request] config", config);

    return config;
  },
  (error) => {
    console.info("[axiosInstance request] error", error);

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.info("[axiosInstance response] response", response);

    if (response.status !== 200) {
      console.error("Please try again later.");

      return false;
    }

    return response.data;
  },
  (error) => {
    console.info("[axiosInstance response] error", error);

    return Promise.reject(error);
  },
);
