"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect } from "react";
import ChartCard from "@/components/ChartCard";

const DotChart = () => {
  useEffect(() => {
    const root = am5.Root.new("amchart-dot-chart");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    // Axes
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 20 }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );
    xAxis.get("renderer").labels.template.setAll({
      oversizedBehavior: "none",
      maxHeight: 50,
      rotation: -90,
    });
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Common categories
    const categories = Array.from({ length: 20 }, (_, i) => `Label ${i + 1}`);
    const baseData = categories.map((label) => ({ category: label }));

    xAxis.data.setAll(baseData);

    const colorPalette = [
      am5.color(0xe63946), // red
      am5.color(0x00b4d8), // blue
      am5.color(0x8338ec), // purple
      am5.color(0xff9f1c), // orange
    ];

    // Generate multiple datasets
    const seriesCount = 4;

    for (let s = 0; s < seriesCount; s++) {
      const seriesData = categories.map((cat) => ({
        category: cat,
        value: Math.round(Math.random() * 100 + s * 10),
      }));

      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: `Series ${s + 1}`,
          xAxis,
          yAxis,
          valueYField: "value",
          categoryXField: "category",
          clustered: false,
        })
      );

      // Hide bars
      series.columns.template.setAll({
        width: 0,
        fillOpacity: 0,
        strokeOpacity: 0,
        tooltipText: "",
      });

      // Add bullets only
      series.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 6,
            fill: colorPalette[s],
            stroke: am5.color(0xffffff),
            strokeWidth: 1.5,
            tooltipText: `[bold]{name}[/]\n{categoryX}: {valueY}`,
          }),
        });
      });

      series.data.setAll(seriesData);
    }

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col justify-start pt-10 px-20">
      <ChartCard
        title="Multi-Series Dot Chart"
        description="Dot chart with multiple datasets using bullets only"
        content={<div id="amchart-dot-chart" className="w-full h-[500px]" />}
      />
    </div>
  );
};

export default DotChart;
