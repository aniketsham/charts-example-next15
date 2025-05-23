"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import ChartCard from "../ChartCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

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

const dotOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Dot Chart (Scatter) with Multiple Datasets",
    },
  },
  scales: {
    x: {
      type: "category" as const,
      labels,
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};

const dotData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 75, 68, 72].map((y, i) => ({
        x: labels[i],
        y,
      })),
      backgroundColor: colorHexes[0],
      pointRadius: 7,
      showLine: false,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90, 55, 62, 80, 77, 69].map((y, i) => ({
        x: labels[i],
        y,
      })),
      backgroundColor: colorHexes[1],
      pointRadius: 7,
      showLine: false,
    },
    {
      label: "Dataset 3",
      data: [18, 48, 77, 9, 100, 27, 40, 50, 45, 60, 55, 80].map((y, i) => ({
        x: labels[i],
        y,
      })),
      backgroundColor: colorHexes[2],
      pointRadius: 7,
      showLine: false,
    },
    {
      label: "Dataset 4",
      data: [35, 25, 60, 51, 76, 35, 60, 80, 90, 85, 78, 88].map((y, i) => ({
        x: labels[i],
        y,
      })),
      backgroundColor: colorHexes[3],
      pointRadius: 7,
      showLine: false,
    },
    {
      label: "Dataset 5",
      data: [45, 39, 50, 61, 66, 75, 30, 40, 55, 65, 70, 60].map((y, i) => ({
        x: labels[i],
        y,
      })),
      backgroundColor: colorHexes[4],
      pointRadius: 7,
      showLine: false,
    },
  ],
};

const DotChart = () => {
  return (
    <div className="px-20">
      <ChartCard
        title="Dot Chart (Scatter)"
        description="Dot chart with multiple datasets using Chart.js colors."
        content={
          <Scatter options={dotOptions} data={dotData} className="h-[400px]" />
        }
      />
    </div>
  );
};

export default DotChart;
