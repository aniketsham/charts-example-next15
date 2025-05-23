"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartCard from "../ChartCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

const barOptions = {
  indexAxis: "y" as const,
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Horizontal Clustered Stacked Bar Chart",
    },
  },
  //   elements: {
  //     bar: {
  //       borderRadius: {
  //         topLeft: 10,
  //         topRight: 10,
  //         bottomLeft: 10,
  //         bottomRight: 10,
  //       },
  //     },
  //   },
  //   maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const barData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 75, 68, 72],
      backgroundColor: colorHexes[0],
      stack: "Stack 0",
      borderRadius: 10,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90, 55, 62, 80, 77, 69],
      backgroundColor: colorHexes[1],
      stack: "Stack 0",
      borderRadius: 10,
    },
    {
      label: "Dataset 3",
      data: [18, 48, 77, 9, 100, 27, 40, 50, 45, 60, 55, 80],
      backgroundColor: colorHexes[2],
      stack: "Stack 2",
      borderRadius: 10,
    },
    {
      label: "Dataset 4",
      data: [35, 25, 60, 51, 76, 35, 60, 80, 90, 85, 78, 88],
      backgroundColor: colorHexes[3],
      stack: "Stack 2",
      borderRadius: 10,
    },
    {
      label: "Dataset 5",
      data: [45, 39, 50, 61, 66, 75, 30, 40, 55, 65, 70, 60],
      backgroundColor: colorHexes[4],
      stack: "Stack 3",
      borderRadius: 10,
    },
    {
      label: "Dataset 6",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 75, 68, 72],
      backgroundColor: colorHexes[5],
      stack: "Stack 3",
      borderRadius: 10,
    },
  ],
};

const StackedBarChart = () => {
  return (
    <div className="px-20">
      <ChartCard
        title="Horizontal Clustered Stacked Bar Chart"
        description="Clustered and stacked horizontal bar chart using Chart.js colors."
        content={
          <Bar options={barOptions} data={barData} className="h-[400px]" />
        }
      />
    </div>
  );
};

export default StackedBarChart;
