import propTypes from "prop-types";
import cx from "clsx";
import CurrentWeatherBlock from "./CurrentWeatherBlock";
import { wmoCode } from "@src/utils/config/wmo-code";

export default function CurrentWeather({ city, data }) {
  const dataCurrent = data?.current;
  const dataCurrentUnits = data?.current_units;

  function transferWMOCode(code) {
    return wmoCode?.[code] ?? "-";
  }

  return (
    <div className={cx("flex flex-wrap gap-2", "w-full rounded border p-2")}>
      <div
        className={cx(
          "basis-full",
          "rounded border bg-gray-100 p-2 text-center",
        )}
      >
        <div className={cx("font-bold")}>
          {city?.name}({city?.country_code})
        </div>
        <div className={cx("text-sm text-gray-500")}>
          {dataCurrent?.time.replace("T", " ")}
        </div>
      </div>

      <CurrentWeatherBlock
        title="Temperature"
        value={dataCurrent?.temperature_2m}
        unit={dataCurrentUnits?.temperature_2m}
      />
      <CurrentWeatherBlock
        title="Condition"
        value={transferWMOCode(dataCurrent?.weather_code)}
      />
      <CurrentWeatherBlock
        title="Wind Speed"
        value={dataCurrent?.wind_speed_10m}
        unit={dataCurrentUnits?.wind_speed_10m}
      />
      <CurrentWeatherBlock
        title="Humidity"
        value={dataCurrent?.relative_humidity_2m}
        unit={dataCurrentUnits?.relative_humidity_2m}
      />
    </div>
  );
}

CurrentWeather.propTypes = {
  city: propTypes.any,
  data: propTypes.any,
};
