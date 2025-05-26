"use client";
import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5venn from "@amcharts/amcharts5/venn";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import ChartCard from "../ChartCard";

const VennDiagramChart = () => {
  useEffect(() => {
    const root = am5.Root.new("venn-diagram-chart-div");

    root.setThemes([am5themes_Animated.new(root)]);

    // Create wrapper container
    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100,
        layout: root.verticalLayout,
      })
    );

    // Create venn series
    const series = container.children.push(
      am5venn.Venn.new(root, {
        categoryField: "name",
        valueField: "value",
        fillField: "color",
        intersectionsField: "sets",
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
      })
    );

    // Data
    const data = [
      { name: "A", value: 10, color: am5.color(0xea1f1f) },
      { name: "B", value: 10, color: am5.color(0xf89c29) },
      { name: "C", value: 10, color: am5.color(0x4989a9) },
      {
        name: "A & B",
        value: 4,
        sets: ["A", "B"],
        color: am5.color(0xea1f1f4d),
      }, // Intersection of A and B
      {
        name: "A & C",
        value: 3,
        sets: ["A", "C"],
        color: am5.color(0x4989a94d),
      }, // Intersection of A and C
      {
        name: "B & C",
        value: 5,
        sets: ["B", "C"],
        color: am5.color(0xf89c294d),
      }, // Intersection of B and C (Translucent Orange)
      {
        name: "A & B & C",
        value: 2,
        sets: ["A", "B", "C"],
        color: am5.color(0x8a2be24d),
      }, // Intersection of A, B, and C (Translucent BlueViolet blend)
    ];

    // Set data
    series.data.setAll(data);

    // Set tooltip content
    series.slices.template.set("tooltipText", "{category}: {value}");

    // Set labels
    series.labels.template.setAll({
      text: "{category}",
      //   fill: am5.color(0xffffff),
      fontSize: 12,
    });

    // Set up hover appearance
    series.hoverGraphics.setAll({
      strokeDasharray: [3, 3],
      //   stroke: am5.color(0xffffff),
      strokeWidth: 2,
    });

    // Add legend
    const legend = container.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );
    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);

    series.set("fillField", "fill");

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="px-20 py-10">
      <ChartCard
        title="Venn Diagram Chart"
        description="AmCharts 5 Venn Diagram with sample data."
        content={
          <div
            id="venn-diagram-chart-div"
            style={{ width: "100%", height: "500px" }}
          />
        }
      />
    </div>
  );
};

export default VennDiagramChart;
