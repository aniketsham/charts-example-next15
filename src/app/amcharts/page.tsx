import DotChart from "@/components/AmCharts/DotChart";
import DotLineChart from "@/components/AmCharts/DotLineChart";
import HeatmapChart from "@/components/AmCharts/HeatmapChart";
import LineChart from "@/components/AmCharts/LineChart";
import MapsChart from "@/components/AmCharts/MapsChart";
import StackedBarChart from "@/components/AmCharts/StackedBarChart";
import VennDiagramChart from "@/components/AmCharts/VeneDiagramChart";

const ChartsPage = () => {
  return (
    <div className="flex flex-col justify-start gap-10">
      <LineChart />
      <StackedBarChart />
      <DotChart />
      <DotLineChart />
      <MapsChart />
      <HeatmapChart />
      <VennDiagramChart />
    </div>
  );
};

export default ChartsPage;
