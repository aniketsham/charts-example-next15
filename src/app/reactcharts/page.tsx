import DotChart from "@/components/Chartjs/DotChart";

import LineChart from "@/components/Chartjs/LineChart";
import StackedBarChart from "@/components/Chartjs/StackedBarChart";
import React from "react";

const ReactChartsPage = () => {
  return (
    <div className="flex flex-col justify-start gap-10">
      <LineChart />
      <StackedBarChart />
      <DotChart />
      {/* <DotLineChart /> */}
    </div>
  );
};

export default ReactChartsPage;
