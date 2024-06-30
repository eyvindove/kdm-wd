import { Suspense } from "react";
import cx from "clsx";
import propTypes from "prop-types";
import { Outlet } from "react-router-dom";
import AppSuspenseFallback from "@src/components/app/AppSuspenseFallback";

export default function AppLayout() {
  return (
    <div className={cx("mx-auto w-full p-5", "md:max-w-[800px]")}>
      <div className={cx("my-3 font-bold")}>Weather Dashboard</div>
      <Suspense fallback={<AppSuspenseFallback />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

AppLayout.propTypes = {
  children: propTypes.node,
};
