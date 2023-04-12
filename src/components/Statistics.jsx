import React, { useEffect, useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const Statistics = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("assignment.json")
    .then(res=>res.json())
    .then(data=>setChart(data));
  }, [])
  console.log(chart.marks);
  return (
    <RadarChart className="mx-auto mb-56" width={600} height={400} data={chart.marks}>
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
    </RadarChart>
  );
};

export default Statistics;
