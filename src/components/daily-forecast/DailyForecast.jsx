import { useState, useEffect } from "react";
import propTypes from "prop-types";
import cx from "clsx";
import {
  ResponsiveContainer,
  ComposedChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

export default function DailyForecast({ data }) {
  const [dailyData, setDailyData] = useState(null);

  function consolidateData() {
    const dailyData = data?.daily;
    const tempData = dailyData?.time.map((item, index) => ({
      time: dailyData.time[index],
      weatherCode: dailyData.weather_code?.[index],
      temperatureRange: [
        dailyData.temperature_2m_max?.[index],
        dailyData.temperature_2m_min?.[index],
      ],
    }));

    setDailyData(tempData);
  }

  useEffect(() => {
    consolidateData();
  }, [data]);

  return (
    <div className={cx("h-[300px] w-full")}>
      <ResponsiveContainer>
        <ComposedChart
          data={dailyData}
          margin={{
            top: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area dataKey="temperatureRange" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

DailyForecast.propTypes = {
  data: propTypes.any,
};
