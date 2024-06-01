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
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400 ">
          Product 1:
          <span className="ml-2 ">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400 ">
          Product 1:
          <span className="ml-2 ">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export  function StackedBarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={400} data={data} margin={{ right: 30 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          type="monotone"
          dataKey="uv"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />
        <Bar
          type="monotone"
          dataKey="pv"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
export  function StackedBarChartComponent2() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={400} data={data} margin={{ right: 30 }}>
          <YAxis  />
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            type="monotone"
            dataKey="uv"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId="1"
          />
          <Bar
            type="monotone"
            dataKey="pv"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId="1"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  