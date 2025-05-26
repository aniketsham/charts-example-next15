// components/IndiaMapChart.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import * as echarts from "echarts/core";
import {
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
} from "echarts/components";
import { MapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import IndiaGeoJson from "@/lib/IndiaGeoJsonPolyGon.json";
import ChartCard from "../ChartCard";

echarts.use([
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer,
]);

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

export default function IndiaMapChart() {
  const [option, setOption] = useState({});

  useEffect(() => {
    // Use imported GeoJSON data directly
    const geoJson: any = IndiaGeoJson;
    console.log(geoJson);
    echarts.registerMap("india", geoJson);

    // Generate data for all states from GeoJSON features
    const allStatesData = geoJson.features.map((feature: any) => ({
      name: feature.properties.name,
      value: Math.floor(Math.random() * 100), // Generate random value for each state
    }));

    setOption({
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}%",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        min: 0,
        max: 100,
        left: "right",
        top: "bottom",
        text: ["High", "Low"],
        calculable: true,
        inRange: {
          color: ["#EA1F1F", "#EA1F1F4D", "#F89C29", "#4989A94D", "#4989A9"], // User provided colors
        },
      },
      series: [
        {
          name: "State Data",
          type: "map",
          map: "india",
          roam: true,
          label: {
            show: true,
            formatter: "{c}%",
            fontWeight: "bold",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          data: allStatesData,
        },
      ],
    });
    return () => {};
  }, []);

  return (
    <div className="px-20 py-10">
      <ChartCard
        title="Maps Chart"
        description="Interactive map visualization of India showing state-wise data distribution with color-coded values and hover tooltips (React Echarts)"
        content={
          <div style={{ height: "600px" }}>
            <ReactECharts
              option={option}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        }
      />
    </div>
  );
}
