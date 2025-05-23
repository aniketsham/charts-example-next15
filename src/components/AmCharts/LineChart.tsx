"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect } from "react";
import ChartCard from "@/components/ChartCard";

const LineChart = () => {
  useEffect(() => {
    const root = am5.Root.new("amchart-container");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        // panX: true,
        // panY: true,
        // wheelX: "panX",
        // wheelY: "zoomX",
        // pinchZoomX: true,
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.5,
        groupData: true,
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        extraMax: 0.1, // gives breathing space
      })
    );

    // Generate 3 sets of series values and simulate stacking
    const seriesNames = ["Apples", "Bananas", "Cherries"];
    const colors = [
      am5.color("#e63946"),
      am5.color("#8338ec"),
      am5.color("#00b4d8"),
    ];
    const dataPoints = 200;
    const baseDate = new Date(2021, 0, 1);

    // Create base data
    const allSeriesData: Record<string, any[]> = {};
    for (let i = 0; i < seriesNames.length; i++) {
      allSeriesData[seriesNames[i]] = [];
    }

    const cumulative = new Array(dataPoints).fill(0);
    for (let i = 0; i < dataPoints; i++) {
      const date = new Date(baseDate);
      date.setDate(date.getDate() + i);
      for (let j = 0; j < seriesNames.length; j++) {
        const val = Math.round(Math.random() * 40) + 20;
        const overlapAdjustment =
          j === 0 ? 0 : Math.round(Math.random() * 20) - 10; // Introduce some overlap
        cumulative[i] += val;
        allSeriesData[seriesNames[j]].push({
          date: date.getTime(),
          value: j === 0 ? val : cumulative[i] + overlapAdjustment,
        });
      }
    }

    // Add multiple LineSeries
    seriesNames.forEach((name, idx) => {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueYField: "value",
          valueXField: "date",
          stroke: colors[idx],

          tooltip: am5.Tooltip.new(root, {
            labelText: "[bold]{name}[/]: {valueY}",
          }),
        })
      );

      series.data.setAll(allSeriesData[name]);
      series.strokes.template.setAll({
        strokeWidth: 1,
        strokeOpacity: 1,
        stroke: colors[idx],
      });
      series.set(
        "tooltip",
        am5.Tooltip.new(root, {
          labelText: "[bold]{name}[/]: {valueY}",
        })
      );
      series.get("tooltip")?.get("background")?.setAll({ fillOpacity: 0.8 });
    });

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col justify-start pt-10 px-20">
      <ChartCard
        title={"Stacked Line Chart (Simulated)"}
        description={"Simulated stacking with 3 LineSeries using AMCharts 5"}
        content={<div id="amchart-container" className="w-full h-[400px]" />}
      />
    </div>
  );
};

export default LineChart;
