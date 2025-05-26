"use client";
import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import ChartCard from "../ChartCard";

const HeatmapChart = () => {
  useEffect(() => {
    const root = am5.Root.new("heatmap-chart-div");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        layout: root.verticalLayout,
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        paddingLeft: 0,
        paddingBottom: 10,
      })
    );

    // Data: Simulating average delivery times by hour and day
    const data = [
      // Structure: { hour: "...", day: "...", value: number }
      { hour: "12 AM", day: "Mon", value: 30 },
      { hour: "1 AM", day: "Mon", value: 25 },
      { hour: "2 AM", day: "Mon", value: 20 },
      { hour: "3 AM", day: "Mon", value: 18 },
      { hour: "4 AM", day: "Mon", value: 15 },
      { hour: "5 AM", day: "Mon", value: 12 },
      { hour: "6 AM", day: "Mon", value: 10 },
      { hour: "7 AM", day: "Mon", value: 15 },
      { hour: "8 AM", day: "Mon", value: 20 },
      { hour: "9 AM", day: "Mon", value: 25 },
      { hour: "10 AM", day: "Mon", value: 30 },
      { hour: "11 AM", day: "Mon", value: 35 },
      { hour: "12 PM", day: "Mon", value: 40 },
      { hour: "1 PM", day: "Mon", value: 45 },
      { hour: "2 PM", day: "Mon", value: 48 },
      { hour: "3 PM", day: "Mon", value: 50 },
      { hour: "4 PM", day: "Mon", value: 55 },
      { hour: "5 PM", day: "Mon", value: 60 },
      { hour: "6 PM", day: "Mon", value: 65 },
      { hour: "7 PM", day: "Mon", value: 70 },
      { hour: "8 PM", day: "Mon", value: 68 },
      { hour: "9 PM", day: "Mon", value: 60 },
      { hour: "10 PM", day: "Mon", value: 50 },
      { hour: "11 PM", day: "Mon", value: 40 },
      { hour: "12 AM", day: "Tue", value: 28 },
      { hour: "1 AM", day: "Tue", value: 23 },
      { hour: "2 AM", day: "Tue", value: 19 },
      { hour: "3 AM", day: "Tue", value: 17 },
      { hour: "4 AM", day: "Tue", value: 14 },
      { hour: "5 AM", day: "Tue", value: 11 },
      { hour: "6 AM", day: "Tue", value: 9 },
      { hour: "7 AM", day: "Tue", value: 14 },
      { hour: "8 AM", day: "Tue", value: 18 },
      { hour: "9 AM", day: "Tue", value: 22 },
      { hour: "10 AM", day: "Tue", value: 28 },
      { hour: "11 AM", day: "Tue", value: 33 },
      { hour: "12 PM", day: "Tue", value: 38 },
      { hour: "1 PM", day: "Tue", value: 42 },
      { hour: "2 PM", day: "Tue", value: 45 },
      { hour: "3 PM", day: "Tue", value: 48 },
      { hour: "4 PM", day: "Tue", value: 52 },
      { hour: "5 PM", day: "Tue", value: 58 },
      { hour: "6 PM", day: "Tue", value: 62 },
      { hour: "7 PM", day: "Tue", value: 60 },
      { hour: "8 PM", day: "Tue", value: 55 },
      { hour: "9 PM", day: "Tue", value: 45 },
      { hour: "10 PM", day: "Tue", value: 35 },
      { hour: "11 PM", day: "Tue", value: 30 },
      { hour: "12 AM", day: "Wed", value: 32 },
      { hour: "1 AM", day: "Wed", value: 27 },
      { hour: "2 AM", day: "Wed", value: 22 },
      { hour: "3 AM", day: "Wed", value: 20 },
      { hour: "4 AM", day: "Wed", value: 17 },
      { hour: "5 AM", day: "Wed", value: 14 },
      { hour: "6 AM", day: "Wed", value: 11 },
      { hour: "7 AM", day: "Wed", value: 16 },
      { hour: "8 AM", day: "Wed", value: 21 },
      { hour: "9 AM", day: "Wed", value: 26 },
      { hour: "10 AM", day: "Wed", value: 31 },
      { hour: "11 AM", day: "Wed", value: 37 },
      { hour: "12 PM", day: "Wed", value: 42 },
      { hour: "1 PM", day: "Wed", value: 47 },
      { hour: "2 PM", day: "Wed", value: 50 },
      { hour: "3 PM", day: "Wed", value: 53 },
      { hour: "4 PM", day: "Wed", value: 58 },
      { hour: "5 PM", day: "Wed", value: 63 },
      { hour: "6 PM", day: "Wed", value: 68 },
      { hour: "7 PM", day: "Wed", value: 65 },
      { hour: "8 PM", day: "Wed", value: 58 },
      { hour: "9 PM", day: "Wed", value: 48 },
      { hour: "10 PM", day: "Wed", value: 38 },
      { hour: "11 PM", day: "Wed", value: 33 },
      { hour: "12 AM", day: "Thu", value: 35 },
      { hour: "1 AM", day: "Thu", value: 30 },
      { hour: "2 AM", day: "Thu", value: 25 },
      { hour: "3 AM", day: "Thu", value: 22 },
      { hour: "4 AM", day: "Thu", value: 19 },
      { hour: "5 AM", day: "Thu", value: 16 },
      { hour: "6 AM", day: "Thu", value: 13 },
      { hour: "7 AM", day: "Thu", value: 18 },
      { hour: "8 AM", day: "Thu", value: 23 },
      { hour: "9 AM", day: "Thu", value: 28 },
      { hour: "10 AM", day: "Thu", value: 34 },
      { hour: "11 AM", day: "Thu", value: 40 },
      { hour: "12 PM", day: "Thu", value: 45 },
      { hour: "1 PM", day: "Thu", value: 50 },
      { hour: "2 PM", day: "Thu", value: 54 },
      { hour: "3 PM", day: "Thu", value: 57 },
      { hour: "4 PM", day: "Thu", value: 62 },
      { hour: "5 PM", day: "Thu", value: 68 },
      { hour: "6 PM", day: "Thu", value: 73 },
      { hour: "7 PM", day: "Thu", value: 70 },
      { hour: "8 PM", day: "Thu", value: 63 },
      { hour: "9 PM", day: "Thu", value: 53 },
      { hour: "10 PM", day: "Thu", value: 43 },
      { hour: "11 PM", day: "Thu", value: 38 },
      { hour: "12 AM", day: "Fri", value: 40 },
      { hour: "1 AM", day: "Fri", value: 35 },
      { hour: "2 AM", day: "Fri", value: 30 },
      { hour: "3 AM", day: "Fri", value: 28 },
      { hour: "4 AM", day: "Fri", value: 25 },
      { hour: "5 AM", day: "Fri", value: 22 },
      { hour: "6 AM", day: "Fri", value: 18 },
      { hour: "7 AM", day: "Fri", value: 24 },
      { hour: "8 AM", day: "Fri", value: 30 },
      { hour: "9 AM", day: "Fri", value: 36 },
      { hour: "10 AM", day: "Fri", value: 42 },
      { hour: "11 AM", day: "Fri", value: 48 },
      { hour: "12 PM", day: "Fri", value: 55 },
      { hour: "1 PM", day: "Fri", value: 60 },
      { hour: "2 PM", day: "Fri", value: 65 },
      { hour: "3 PM", day: "Fri", value: 70 },
      { hour: "4 PM", day: "Fri", value: 75 },
      { hour: "5 PM", day: "Fri", value: 80 },
      { hour: "6 PM", day: "Fri", value: 85 },
      { hour: "7 PM", day: "Fri", value: 88 },
      { hour: "8 PM", day: "Fri", value: 80 },
      { hour: "9 PM", day: "Fri", value: 70 },
      { hour: "10 PM", day: "Fri", value: 60 },
      { hour: "11 PM", day: "Fri", value: 50 },
      { hour: "12 AM", day: "Sat", value: 45 },
      { hour: "1 AM", day: "Sat", value: 40 },
      { hour: "2 AM", day: "Sat", value: 35 },
      { hour: "3 AM", day: "Sat", value: 30 },
      { hour: "4 AM", day: "Sat", value: 28 },
      { hour: "5 AM", day: "Sat", value: 25 },
      { hour: "6 AM", day: "Sat", value: 20 },
      { hour: "7 AM", day: "Sat", value: 28 },
      { hour: "8 AM", day: "Sat", value: 35 },
      { hour: "9 AM", day: "Sat", value: 42 },
      { hour: "10 AM", day: "Sat", value: 50 },
      { hour: "11 AM", day: "Sat", value: 58 },
      { hour: "12 PM", day: "Sat", value: 65 },
      { hour: "1 PM", day: "Sat", value: 70 },
      { hour: "2 PM", day: "Sat", value: 75 },
      { hour: "3 PM", day: "Sat", value: 80 },
      { hour: "4 PM", day: "Sat", value: 85 },
      { hour: "5 PM", day: "Sat", value: 90 },
      { hour: "6 PM", day: "Sat", value: 95 },
      { hour: "7 PM", day: "Sat", value: 98 },
      { hour: "8 PM", day: "Sat", value: 90 },
      { hour: "9 PM", day: "Sat", value: 80 },
      { hour: "10 PM", day: "Sat", value: 70 },
      { hour: "11 PM", day: "Sat", value: 60 },
      { hour: "12 AM", day: "Sun", value: 50 },
      { hour: "1 AM", day: "Sun", value: 45 },
      { hour: "2 AM", day: "Sun", value: 40 },
      { hour: "3 AM", day: "Sun", value: 35 },
      { hour: "4 AM", day: "Sun", value: 32 },
      { hour: "5 AM", day: "Sun", value: 30 },
      { hour: "6 AM", day: "Sun", value: 25 },
      { hour: "7 AM", day: "Sun", value: 30 },
      { hour: "8 AM", day: "Sun", value: 38 },
      { hour: "9 AM", day: "Sun", value: 45 },
      { hour: "10 AM", day: "Sun", value: 53 },
      { hour: "11 AM", day: "Sun", value: 60 },
      { hour: "12 PM", day: "Sun", value: 68 },
      { hour: "1 PM", day: "Sun", value: 75 },
      { hour: "2 PM", day: "Sun", value: 80 },
      { hour: "3 PM", day: "Sun", value: 85 },
      { hour: "4 PM", day: "Sun", value: 90 },
      { hour: "5 PM", day: "Sun", value: 95 },
      { hour: "6 PM", day: "Sun", value: 98 },
      { hour: "7 PM", day: "Sun", value: 95 },
      { hour: "8 PM", day: "Sun", value: 85 },
      { hour: "9 PM", day: "Sun", value: 75 },
      { hour: "10 PM", day: "Sun", value: 65 },
      { hour: "11 PM", day: "Sun", value: 55 },
    ];

    // Axes
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "hour",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
          inversed: false,
          cellStartLocation: 0,
          cellEndLocation: 1,
        }),
      })
    );

    xAxis.data.setAll([
      { hour: "12 AM" },
      { hour: "1 AM" },
      { hour: "2 AM" },
      { hour: "3 AM" },
      { hour: "4 AM" },
      { hour: "5 AM" },
      { hour: "6 AM" },
      { hour: "7 AM" },
      { hour: "8 AM" },
      { hour: "9 AM" },
      { hour: "10 AM" },
      { hour: "11 AM" },
      { hour: "12 PM" },
      { hour: "1 PM" },
      { hour: "2 PM" },
      { hour: "3 PM" },
      { hour: "4 PM" },
      { hour: "5 PM" },
      { hour: "6 PM" },
      { hour: "7 PM" },
      { hour: "8 PM" },
      { hour: "9 PM" },
      { hour: "10 PM" },
      { hour: "11 PM" },
    ]);

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "day",
        renderer: am5xy.AxisRendererY.new(root, {
          inversed: true,
          cellStartLocation: 0,
          cellEndLocation: 1,
        }),
      })
    );
    yAxis.data.setAll([
      { day: "Mon" },
      { day: "Tue" },
      { day: "Wed" },
      { day: "Thu" },
      { day: "Fri" },
      { day: "Sat" },
      { day: "Sun" },
    ]);

    // Series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        calculateAggregates: true,
        stroke: am5.color(0xffffff),
        clustered: false,
        xAxis: xAxis,
        yAxis: yAxis,
        valueField: "value",
        categoryXField: "hour",
        categoryYField: "day",
      })
    );

    series.columns.template.setAll({
      tooltipText: "{day}, {hour}: {value}",
      strokeOpacity: 1,
      strokeWidth: 2,
      width: am5.percent(100),
      height: am5.percent(100),
    });

    series.set("heatRules", [
      {
        target: series.columns.template,
        dataField: "value",
        min: am5.color(0x00ff00),
        max: am5.color(0xff0000),
        key: "fill",
      },
    ]);

    series.data.setAll(data);

    // Add heat legend
    const heatLegend = chart.bottomAxesContainer.children.push(
      am5.HeatLegend.new(root, {
        orientation: "horizontal",
        startColor: am5.color(0x00ff00),
        endColor: am5.color(0xff0000),
        paddingTop: 20,
      })
    );

    heatLegend.startLabel.setAll({
      visible: false,
    });
    heatLegend.endLabel.setAll({
      visible: false,
    });

    heatLegend.set("y", am5.p50);
    heatLegend.set("centerY", am5.p50);

    series.columns.template.events.on("pointerover", function (event: any) {
      const di = event.target.dataItem;
      if (di) {
        heatLegend.showValue(di.get("value", 0));
      }
    });

    series.events.on("datavalidated", function () {
      heatLegend.set("startValue", series.getPrivate("valueHigh"));
      heatLegend.set("endValue", series.getPrivate("valueLow"));
    });

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="px-20 p-8">
      <ChartCard
        title="Food Delivery Heatmap"
        description="Average delivery times by hour and day"
        content={
          <div
            id="heatmap-chart-div"
            style={{ width: "100%", height: "700px" }}
          />
        }
      />
    </div>
  );
};

export default HeatmapChart;
