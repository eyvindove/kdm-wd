import propTypes from "prop-types";
import { transferWMOCode } from "@src/utils/helpers";
import cx from "clsx";

export default function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length > 0) {
    return (
      <div className={cx("border bg-white p-2 text-sm shadow")}>
        <p>{label}</p>
        <p>{transferWMOCode(payload[0].payload.weatherCode)}</p>
        <p>Temp. Max: {payload[0].payload.temperatureRange[0]}</p>
        <p>Temp. Min: {payload[0].payload.temperatureRange[1]}</p>
      </div>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.any,
  label: propTypes.string,
};
