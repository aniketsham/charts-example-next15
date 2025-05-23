"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import IndiaGeoJson from "@/lib/IndiaGeoJsonPolyGon.json";
import { FeatureCollection } from "geojson";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect } from "react";
import ChartCard from "./ChartCard";
function getPolygonCenter(
  geometry: GeoJSON.Geometry
): [number, number] | undefined {
  let coords: number[][];

  if (geometry.type === "Polygon") {
    coords = geometry.coordinates[0]; // take outer ring
  } else if (geometry.type === "MultiPolygon") {
    coords = geometry.coordinates[0][0]; // take first outer ring
  } else {
    return undefined;
  }

  if (!coords || coords.length === 0) return undefined;

  // Compute centroid using centroid formula
  let xSum = 0;
  let ySum = 0;
  let area = 0;

  for (let i = 0, len = coords.length; i < len - 1; i++) {
    const [x0, y0] = coords[i];
    const [x1, y1] = coords[i + 1];

    const a = x0 * y1 - x1 * y0;
    xSum += (x0 + x1) * a;
    ySum += (y0 + y1) * a;
    area += a;
  }

  area *= 0.5;

  if (area === 0) {
    // fallback: use average of coordinates
    const lats = coords.map((c) => c[1]);
    const lngs = coords.map((c) => c[0]);
    return [
      (Math.min(...lngs) + Math.max(...lngs)) / 2,
      (Math.min(...lats) + Math.max(...lats)) / 2,
    ];
  }

  const cx = xSum / (6 * area);
  const cy = ySum / (6 * area);

  return [cx, cy];
}

const MapsChart = () => {
  console.log(IndiaGeoJson.features.map((f: any) => f.id));
  useEffect(() => {
    const root = am5.Root.new("amchart-maps-chart");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",

        projection: am5map.geoMercator(),
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: IndiaGeoJson as FeatureCollection,
        valueField: "value",

        stroke: am5.color(0xffffff),
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      //   tooltipText: "{name}",
      interactive: true,
      tooltipText: "{name}: {value}%", // ✅ show value inside the state
      //   fontSize: 12,
      templateField: "polygonSettings", // 👈 use color from polygonSettings.fill
    });

    const ids = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    ];

    const colorHexes = [
      "#4989A9", // solid teal
      "#4989A94D", // translucent teal
      "#EA1F1F", // solid red
      "#EA1F1F4D", // translucent red
      "#F89C29", // orange
    ];

    const coloredStates = ids.map((id, index) => ({
      id,
      polygonSettings: {
        fill: am5.color(colorHexes[index % colorHexes.length]),
      },
      value: Math.floor(Math.random() * 100),
    }));
    polygonSeries.data.setAll(coloredStates);
    const labelSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    const labelData = IndiaGeoJson.features
      .filter((f: any) => f.id)
      .map((f: any) => {
        const id = f.id;
        // const coords = f.geometry.coordinates;
        const center = getPolygonCenter(f.geometry);
        if (!center) return null;
        const [lng, lat] = center;
        const value = coloredStates.find((s) => s.id === id)?.value ?? 0;
        return {
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
          labelSettings: {
            text: `${value}%`,
            fontSize: 10,
            fill: am5.color(0xffffff),
            centerX: am5.p50,
            centerY: am5.p50,
          },
        };
      });

    labelSeries.bullets.push(() =>
      am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          templateField: "labelSettings",
          centerX: am5.p50,
          centerY: am5.p50,
        }),
      })
    );

    labelSeries.data.setAll(labelData);
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col justify-start py-10 px-20">
      <ChartCard
        title="Maps Chart"
        id="amchart-maps-chart"
        content={<div id="amchart-maps-chart" className="w-full h-[500px]" />}
      />
    </div>
  );
};

export default MapsChart;
