import React, { useEffect, useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("assignment.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  // console.log(chart.marks);
  return (
    <>
      <h1 className="text-5xl font-bold mx-4 md:mx-24 text-violet-800 text-center mb-4">Here is my 8 Assignment Marks</h1>
      <RadarChart
        className="mx-auto mb-56"
        width={600}
        height={400}
        data={chart.marks}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Score"
          dataKey="score"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Tooltip />
      </RadarChart>
    </>
  );
};

export default Statistics;
