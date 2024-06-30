import cx from "clsx";
import propTypes from "prop-types";

export default function CurrentWeatherBlock({ title, value, unit }) {
  return (
    <div
      className={cx(
        "shrink basis-full",
        "rounded border p-2 text-center",
        "md:basis-[calc((100%-8px)/2)]",
        "lg:basis-[calc((100%-8px*3)/4)]",
        "hover:bg-gray-100",
      )}
    >
      <div className={cx("text-gray-500")}>{title}</div>
      <div className={cx("text-lg font-bold")}>
        <span>{value ?? "-"}</span>
        <span>{unit ? `(${unit})` : null}</span>
      </div>
    </div>
  );
}

CurrentWeatherBlock.propTypes = {
  title: propTypes.string,
  value: propTypes.any,
  unit: propTypes.string,
};
