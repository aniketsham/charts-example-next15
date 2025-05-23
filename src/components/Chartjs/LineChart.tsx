"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartCard from "../ChartCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Stacked Multi-Line Chart",
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const colorHexes = [
  "#4989A9", // solid teal
  "#4989A94D", // translucent teal
  "#EA1F1F", // solid red
  "#EA1F1F4D", // translucent red
  "#F89C29", // orange
];

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 75, 68, 72],
      borderColor: colorHexes[0],
      backgroundColor: colorHexes[0] + "33", // add opacity for fill
      fill: true,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90, 55, 62, 80, 77, 69],
      borderColor: colorHexes[1],
      backgroundColor: colorHexes[1] + "33",
      fill: true,
    },
    {
      label: "Dataset 3",
      data: [18, 48, 77, 9, 100, 27, 40, 50, 45, 60, 55, 80],
      borderColor: colorHexes[2],
      backgroundColor: colorHexes[2] + "33",
      fill: true,
    },
    {
      label: "Dataset 4",
      data: [35, 25, 60, 51, 76, 35, 60, 80, 90, 85, 78, 88],
      borderColor: colorHexes[3],
      backgroundColor: colorHexes[3] + "33",
      fill: true,
    },
    {
      label: "Dataset 5",
      data: [45, 39, 50, 61, 66, 75, 30, 40, 55, 65, 70, 60],
      borderColor: colorHexes[4],
      backgroundColor: colorHexes[4] + "33",
      fill: true,
    },
  ],
};

const LineChart = () => {
  return (
    <div className="px-20 py-30">
      <ChartCard
        title="Line Chart"
        description="Line Chart"
        content={<Line options={options} data={data} />}
      />
    </div>
  );
};

export default LineChart;
