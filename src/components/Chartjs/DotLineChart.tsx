// pages/index.tsx
"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import ChartCard from "../ChartCard";

const categories = [
  "01/5",
  "02/5",
  "03/5",
  "04/5",
  "05/5",
  "06/5",
  "07/5",
  "08/5",
  "09/5",
  "10/5",
  "11/5",
  "12/5",
  "13/5",
  "14/5",
];

// Random values between 0 and 100
const generateSeriesData = () =>
  categories.map(() => Math.floor(Math.random() * 100));

const getDotColor = (value: any) => {
  if (value < 20) return "#EA1F1F";
  if (value < 35) return "#EA1F1F99";
  if (value < 50) return "#EA1F1F4D";
  if (value < 65) return "#4989A94D";
  if (value < 80) return "#4989A999";
  if (value < 100) return "#4989A9";
  return "#4989A94D";
};

const option = {
  tooltip: {
    trigger: "axis",
  },
  grid: [
    { top: "5%", height: "25%" },
    { top: "35%", height: "25%" },
    { top: "65%", height: "25%" },
  ],
  xAxis: [
    {
      type: "category",
      data: categories,
      gridIndex: 0,
      axisLabel: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    },
    {
      type: "category",
      data: categories,
      gridIndex: 1,
      axisLabel: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    },
    {
      type: "category",
      data: categories,
      gridIndex: 2,
      axisLabel: { show: true },
      axisLine: { show: true },
      axisTick: { show: false },
      splitLine: { show: false },
    },
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      max: 100,
      gridIndex: 0,
      name: "Value 1",
      nameLocation: "middle", // Places label in the middle vertically
      nameGap: 35, // Distance between axis and label
      nameRotate: 0,
      axisLabel: { show: false }, // Hide labels
      splitLine: { show: true },
    },
    {
      type: "value",
      min: 0,
      max: 100,
      gridIndex: 1,
      name: "Value 2",
      nameLocation: "middle", // Places label in the middle vertically
      nameGap: 35, // Distance between axis and label
      nameRotate: 0,
      axisLabel: { show: false }, // Hide labels
      splitLine: { show: true },
    },
    {
      type: "value",
      min: 0,
      max: 100,
      gridIndex: 2,
      name: "Value 3",
      nameLocation: "middle", // Places label in the middle vertically
      nameGap: 35, // Distance between axis and label
      nameRotate: 0,
      axisLabel: { show: false }, // Hide labels
      splitLine: { show: true },
    },
  ],
  series: [
    {
      name: "Value 1",
      type: "line",
      xAxisIndex: 0,
      yAxisIndex: 0,
      data: generateSeriesData(),
      smooth: true,
      symbol: "roundRect",
      symbolSize: 8,
      itemStyle: {
        color: function (params: any) {
          return getDotColor(params.value);
        },
      },
      lineStyle: {
        color: "#B2DFDB",
        width: 1,
      },
    },
    {
      name: "Value 2",
      type: "line",
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: generateSeriesData(),
      smooth: true,
      symbol: "roundRect",
      symbolSize: 8,
      itemStyle: {
        color: function (params: any) {
          return getDotColor(params.value);
        },
      },
      lineStyle: {
        color: "#B2DFDB",
        width: 1,
      },
    },
    {
      name: "Value 3",
      type: "line",
      xAxisIndex: 2,
      yAxisIndex: 2,
      data: generateSeriesData(),
      smooth: true,
      symbol: "roundRect",
      symbolSize: 8,
      itemStyle: {
        color: function (params: any) {
          return getDotColor(params.value);
        },
      },
      lineStyle: {
        color: "#B2DFDB",
        width: 1,
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="p-8">
      <ChartCard
        title="Dot Line Matrix Chart"
        description="Dot line matrix chart with multiple datasets"
        content={<ReactECharts option={option} style={{ height: 500 }} />}
      />
    </div>
  );
}
