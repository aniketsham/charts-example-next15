import DotLineChart from "@/components/AmCharts/DotLineChart";
import DotChart from "@/components/Chartjs/DotChart";

import LineChart from "@/components/Chartjs/LineChart";
import IndiaMapChart from "@/components/Chartjs/MapsChart";
import StackedBarChart from "@/components/Chartjs/StackedBarChart";
import React from "react";

const ReactChartsPage = () => {
  return (
    <div className="flex flex-col justify-start gap-10">
      <LineChart />
      <StackedBarChart />
      <DotChart />
      <DotLineChart />
      <IndiaMapChart />
    </div>
  );
};

export default ReactChartsPage;
