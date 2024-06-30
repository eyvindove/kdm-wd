import cx from "clsx";
import GeocodingSearch from "@src/components/geocoding-search/GeocodingSearch";

export default function WeatherIndexPage() {
  return (
    <div className={cx("")}>
      <GeocodingSearch />
    </div>
  );
}
