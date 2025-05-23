"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect } from "react";
import ChartCard from "@/components/ChartCard";

const HorizontalBarChart = () => {
  useEffect(() => {
    const root = am5.Root.new("amchart-horizontal-bar");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create axes
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0.1,
          cellEndLocation: 0.9,
        }),
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    // Data
    const data = [
      {
        category: "Quarterly report for 2023: Q1",
        apples: 40,
        bananas: 55,
        oranges: 65,
        grapes: 35,
        pears: 50,
      },
      {
        category: "Quarterly report for 2023: Q2",
        apples: 30,
        bananas: 78,
        oranges: 48,
        grapes: 52,
        pears: 60,
      },
      {
        category: "Quarterly report for 2023: Q3",
        apples: 27,
        bananas: 40,
        oranges: 72,
        grapes: 44,
        pears: 38,
      },
      {
        category: "Quarterly report for 2023: Q4",
        apples: 50,
        bananas: 60,
        oranges: 55,
        grapes: 61,
        pears: 70,
      },
    ];

    yAxis.data.setAll(data);

    // Colors
    const baseColors = [
      am5.color(0xe63946), // red
      am5.color(0x0077b6), // deep blue
      am5.color(0x38b000), // green
      am5.color(0x8338ec), // purple
      am5.color(0xff6f61), // coral/orange-pink
    ];

    const colors = baseColors.map((c) => am5.Color.brighten(c, 2));

    // Series builder (base + actual)
    const createStackedSeries = (
      field: string,
      name: string,
      color: am5.Color,
      baseColor: am5.Color
    ) => {
      // Base background bar
      const baseSeries = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: `${name} Base`,
          xAxis,
          yAxis,
          valueXField: field,
          categoryYField: "category",
          stacked: false,
        })
      );

      baseSeries.columns.template.setAll({
        fill: baseColor,
        stroke: baseColor,
        width: am5.percent(100),
        tooltipText: "{name}: {valueX}",
        // cornerRadiusTR: 10,
        // cornerRadiusBR: 10,
        // maskBullets: false,
      });

      baseSeries.data.setAll(data);

      // Actual foreground bar
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name,
          xAxis,
          yAxis,
          valueXField: field,
          categoryYField: "category",
          stacked: true,
          tooltip: am5.Tooltip.new(root, {
            labelText: `[bold]{name}[/]: {valueX}`,
          }),
        })
      );

      series.columns.template.setAll({
        fill: color,
        stroke: color,
        width: am5.percent(60),
        cornerRadiusTR: 10,
        cornerRadiusBR: 10,
        tooltipText: "{name}: {valueX}",
        // maskBullets: false,
      });

      series.data.setAll(data);
    };

    // const createStackedSeries = (
    //   field: string,
    //   name: string,
    //   color: am5.Color,
    //   baseColor: am5.Color
    // ) => {
    //   // Base background bar
    //   const baseSeries = chart.series.push(
    //     am5xy.ColumnSeries.new(root, {
    //       name: `${name} Base`,
    //       xAxis,
    //       yAxis,
    //       valueXField: field,
    //       categoryYField: "category",
    //       stacked: false,
    //     })
    //   );

    //   baseSeries.columns.template.setAll({
    //     fill: baseColor,
    //     stroke: baseColor,
    //     width: am5.percent(90),
    //     centerX: am5.p50,
    //     tooltipText: "{name}: {valueX}",
    //   });

    //   // Add adapters for rounded corners on left side of bottom bar
    //   baseSeries.columns.template.adapters.add(
    //     "cornerRadiusTR",
    //     (radius, target) => {
    //       const seriesIndex = chart.series.indexOf(
    //         target.dataItem?.component as am5xy.XYSeries
    //       );
    //       return seriesIndex === 0 ? 10 : 0;
    //     }
    //   );

    //   baseSeries.columns.template.adapters.add(
    //     "cornerRadiusBR",
    //     (radius, target) => {
    //       const seriesIndex = chart.series.indexOf(
    //         target.dataItem?.component as am5xy.XYSeries
    //       );
    //       return seriesIndex === 0 ? 10 : 0;
    //     }
    //   );

    //   baseSeries.data.setAll(data);

    //   // Actual foreground bar
    //   const series = chart.series.push(
    //     am5xy.ColumnSeries.new(root, {
    //       name,
    //       xAxis,
    //       yAxis,
    //       valueXField: field,
    //       categoryYField: "category",
    //       stacked: true,
    //       tooltip: am5.Tooltip.new(root, {
    //         labelText: `[bold]{name}[/]: {valueX}`,
    //       }),
    //     })
    //   );

    //   series.columns.template.setAll({
    //     fill: color,
    //     stroke: color,
    //     width: am5.percent(110),
    //     centerX: am5.p50,
    //     cornerRadiusTR: 10,
    //     cornerRadiusBR: 10,
    //     strokeOpacity: 0,
    //     tooltipText: "{name}: {valueX}",
    //   });

    //   series.data.setAll(data);
    // };

    // Add series (each with base and actual)
    createStackedSeries("apples", "Apples", colors[0], baseColors[0]);
    createStackedSeries("bananas", "Bananas", colors[1], baseColors[1]);
    createStackedSeries("oranges", "Oranges", colors[2], baseColors[2]);
    createStackedSeries("grapes", "Grapes", colors[3], baseColors[3]);
    createStackedSeries("pears", "Pears", colors[4], baseColors[4]);

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="px-20">
      <ChartCard
        title="Stacked Horizontal Bar Chart"
        description="Each bar overlays a rounded background bar"
        content={
          <div id="amchart-horizontal-bar" className="w-full h-[400px]" />
        }
      />
    </div>
  );
};

export default HorizontalBarChart;
