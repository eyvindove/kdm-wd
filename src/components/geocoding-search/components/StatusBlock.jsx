import propTypes from "prop-types";
import cx from "clsx";

export default function StatusBlock({ text }) {
  return <div className={cx("p-2 text-center text-gray-500")}>{text}</div>;
}

StatusBlock.propTypes = {
  text: propTypes.string,
};
