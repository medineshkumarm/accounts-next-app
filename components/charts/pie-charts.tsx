"use client";
import React from "react";
import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400 ">
          Product 1:
          <span className="ml-2 ">${payload[0].value}</span>
        </p>
        {/* <p className="text-sm text-indigo-400 ">
          Product 1:
          <span className="ml-2 ">${payload[1].value}</span>
        </p> */}
      </div>
    );
  }
  return null;
};

export default function SimplePieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={400}>
        {/* <CartesianGrid strokeDasharray="5 5" /> */}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Pie
          startAngle={360}
          endAngle={0}
          dataKey="value"
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#3b82f6"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
