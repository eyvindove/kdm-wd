import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getForecast } from "@src/services/api";
import cx from "clsx";
import CurrentWeather from "@src/components/current-weather/CurrentWeather";

export default function WeatherInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location?.state;
  const city = locationState?.city;

  const isInitialized = useRef(false);
  const [data, setData] = useState(null);

  async function getData(city) {
    const res = await getForecast({
      latitude: city.latitude,
      longitude: city.longitude,
    });
    setData(res);
  }

  useEffect(() => {
    if (isInitialized.current) {
      return;
    }
    isInitialized.current = true;

    if (!locationState) {
      navigate("/");
    }

    getData(city);
  }, []);

  function goBackIndexPage() {
    navigate("/");
  }

  return (
    <>
      <div className={cx("my-2")}>
        <button
          className={cx("rounded border px-2 text-sm", "hover:bg-gray-100")}
          type="button"
          onClick={goBackIndexPage}
        >
          Back to index page
        </button>
      </div>

      <CurrentWeather city={city} data={data} />
    </>
  );
}
