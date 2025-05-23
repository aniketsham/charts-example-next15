import DotChart from "@/components/DotChart";
import DotLineChart from "@/components/DotLineChart";
import LineChart from "@/components/LineChart";
import MapsChart from "@/components/MapsChart";
import StackedBarChart from "@/components/StackedBarChart";

const ChartsPage = () => {
  return (
    <div className="flex flex-col justify-start gap-10">
      <LineChart />
      <StackedBarChart />
      <DotChart />
      <DotLineChart />
      <MapsChart />
    </div>
  );
};

export default ChartsPage;
