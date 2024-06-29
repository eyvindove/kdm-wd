import cx from "clsx";
import propTypes from "prop-types";

export default function AppLayout({ children }) {
  return (
    <div className={cx("mx-auto w-full p-5", "md:max-w-[800px]")}>
      {children}
    </div>
  );
}

AppLayout.propTypes = {
  children: propTypes.node,
};
