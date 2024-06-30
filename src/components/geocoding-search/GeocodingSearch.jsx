import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import cx from "clsx";
import { getSearch } from "@src/services/api";
import StatusBlock from "./components/StatusBlock";

export default function GeocodingSearch() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [geocodingList, setGeocodingList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  async function getGeocodingByName(name) {
    setIsLoading(true);

    const res = await getSearch({ name });

    setGeocodingList(res.results);
    setIsLoading(false);
    if (!res.results) {
      setIsEmpty(true);
    }
  }

  const debounceGetGeocodingByName = useMemo(
    () => debounce(getGeocodingByName, 500),
    [],
  );

  function handleInputChange(e) {
    const targetValue = e.target.value.trim();

    setInput(targetValue);

    if (targetValue) {
      setIsLoading(true);
      debounceGetGeocodingByName(targetValue);
    } else {
      setIsEmpty(false);
      setGeocodingList([]);
    }
  }

  function handleCityClick(city) {
    navigate("/info", {
      state: {
        city,
      },
    });
  }

  return (
    <div>
      <div className={cx("relative")}>
        <input
          className={cx("w-full rounded border px-2 py-1")}
          placeholder="Search a city name..."
          value={input}
          onChange={handleInputChange}
        />

        {isLoading ? (
          <StatusBlock text="Loading..." />
        ) : geocodingList && geocodingList.length > 0 ? (
          <div
            className={cx(
              "absolute top-[calc(100%+8px)] z-10",
              "w-full rounded border bg-white p-2",
            )}
          >
            {geocodingList.map((city) => (
              <div
                key={city.id}
                className={cx(
                  "cursor-pointer p-2 transition-all",
                  "hover:bg-gray-100",
                )}
                onClick={() => handleCityClick(city)}
              >
                {city.name} ({city.country_code})
              </div>
            ))}
          </div>
        ) : isEmpty ? (
          <StatusBlock text="Could not found related city name." />
        ) : null}
      </div>
    </div>
  );
}
