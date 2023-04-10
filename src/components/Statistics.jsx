import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "A1", score: 58 },
  { name: "A2", score: 60 },
  { name: "A3", score: 58 },
  { name: "A4", score: 60 },
  { name: "A5", score: 60 },
  { name: "A6", score: 60 },
  { name: "A7", score: 60 },
  { name: "A8", score: 60 },
];

const Chart = () => {
  return (
    <AreaChart className="mx-auto" width={600} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Tooltip />
      <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

export default Chart;
