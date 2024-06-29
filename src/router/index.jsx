/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const WeatherIndexPage = lazy(() => import("@src/pages/WeatherIndexPage"));
const WeatherInfoPage = lazy(() => import("@src/pages/WeatherInfoPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WeatherIndexPage />,
  },
  {
    path: "/info",
    element: <WeatherInfoPage />,
  },
]);
