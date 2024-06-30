/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = lazy(() => import("@src/layouts/AppLayout"));
const WeatherIndexPage = lazy(() => import("@src/pages/WeatherIndexPage"));
const WeatherInfoPage = lazy(() => import("@src/pages/WeatherInfoPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <WeatherIndexPage />,
      },
      {
        path: "info",
        element: <WeatherInfoPage />,
      },
    ],
  },
]);
