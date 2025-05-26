"use client";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect } from "react";
import ChartCard from "@/components/ChartCard";
const data: any = [];

const names = [
  "Raina",
  "Demarcus",
  "Carlo",
  "Jacinda",
  "Richie",
  "Antony",
  "Amada",
  "Idalia",
  "Janella",
  "Marla",
  "Curtis",
  "Shellie",
  "Meggan",
  "Nathanael",
  "Jannette",
  "Tyrell",
  "Sheena",
  "Maranda",
  "Briana",
];

let value1 = 50;
let value2 = 50;
let value3 = 50;

for (let i = 0; i < names.length; i++) {
  value1 += (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 10);
  value2 += (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 10);
  value3 += (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 10);

  value1 = Math.min(Math.max(value1, 0), 100);
  value2 = Math.min(Math.max(value2, 0), 100);
  value3 = Math.min(Math.max(value3, 0), 100);

  data.push({
    category: names[i],
    value1: Math.round(value1),
    value2: Math.round(value2),
    value3: Math.round(value3),
  });
}

const DotLineChart = () => {
  useEffect(() => {
    const root = am5.Root.new("dot-line-matrix-chart");
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: false,
        wheelX: "none",

        arrangeTooltips: false,
        pinchZoomX: true,
      })
    );

    chart.leftAxesContainer.set("layout", root.verticalLayout);
    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 70 });
    xRenderer.labels.template.setAll({
      multiLocation: 0.5,
      location: 0.5,
      centerY: am5.p50,
      centerX: am5.p50,
      paddingTop: 10,
    });

    xRenderer.grid.template.set("location", 0.5);
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        tooltip: am5.Tooltip.new(root, {}),
        renderer: xRenderer,
        paddingBottom: 20,
      })
    );

    xAxis.data.setAll(data);

    function createSeries(field: any, margin: any) {
      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),

          tooltip: am5.Tooltip.new(root, {
            animationDuration: 0,
          }),
          x: am5.p100,
          centerX: am5.p100,
          marginTop: margin, // this makes gap between axes
        })
      );
      const label1 = am5.Label.new(root, {
        text: "Soya bean",
        y: am5.p50,
        centerX: am5.p50,
      });
      yAxis.get("renderer").labels.template.setAll({
        visible: false,
      });
      yAxis.ghostLabel.set("forceHidden", true);
      yAxis.children.unshift(label1);
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          categoryXField: "category",
          tooltipText: "{valueX}",
          sequencedInterpolation: true,

          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "vertical",

            labelText: "{valueY}",
          }),
        })
      );
      //   }

      //   if (!column) {
      //   series.bullets.push(function () {
      //     return am5.Bullet.new(root, {
      //       //   locationY: 1,
      //       //   locationX: 0.5,

      //       sprite: am5.RoundedRectangle.new(root, {
      //         width: 8,
      //         height: 16,
      //         // cornerRadius: 4, // Rounded corners on all sides
      //         // rotation: 0,
      //         centerX: am5.p50,
      //         centerY: am5.p50,
      //         tooltipText: `{categoryX}: {valueY}`,
      //         fill: series.get("fill"),
      //       }).adapters.add("fill", (fill, target) => {
      //         let dataItem = target.dataItem;
      //         if (dataItem) {
      //           let value: any = dataItem.get("valueY");
      //           if (value > 100) return am5.color(0xff0000); // red for high
      //           if (value > 50) return am5.color(0xffa500); // orange for medium
      //           return am5.color(0x00ff00); // green for low
      //         }
      //         return fill;
      //       }),
      //     });
      //   });
      series.bullets.push(() => {
        const shape = am5.RoundedRectangle.new(root, {
          width: 8,
          height: 16,
          centerX: am5.p50,
          centerY: am5.p50,
          tooltipText: "{categoryX}: {valueY}",
        });

        // Use the correct field for this series
        shape.adapters.add("fill", (fill, target) => {
          const dataItem: any = target.dataItem;
          if (dataItem) {
            const context = dataItem.dataContext;
            const value = context[field]; // dynamically pick value1/value2/value3

            if (value < 20) return am5.color("#EA1F1F");
            if (value < 35) return am5.color("#EA1F1F99");
            if (value < 50) return am5.color("#EA1F1F4D");
            if (value < 65) return am5.color("#4989A94D");
            if (value < 80) return am5.color("#4989A999");
            if (value < 100) return am5.color("#4989A9");
            return am5.color("#4989A94D");
          }
          return fill;
        });

        return am5.Bullet.new(root, {
          locationY: 0.5,
          sprite: shape,
        });
      });

      series.data.setAll(data);
      series.appear();

      return series;
    }

    createSeries("value1", 0);
    createSeries("value2", 0);
    createSeries("value3", 0);
    const legend = chart.children.push(
      am5.Legend.new(root, {
        nameField: "name",
        fillField: "color",
        strokeField: "color",
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: am5.percent(100),
        layout: root.horizontalLayout,
        marginTop: 5,
      })
    );

    legend.data.setAll([
      { name: "0 - 20", color: am5.color("#EA1F1F") },
      { name: "20 - 34", color: am5.color("#EA1F1F99") },
      { name: "35 - 49", color: am5.color("#EA1F1F4D") },
      { name: "50 - 64", color: am5.color("#4989A94D") },
      { name: "65 - 79", color: am5.color("#4989A999") },
      { name: "80 - 99", color: am5.color("#4989A9") },
    ]);

    // createSeries("value3", 40, true);
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="flex flex-col justify-start pt-10 px-20">
      <ChartCard
        title="Multi-Series Dot Chart"
        description="Dot chart with multiple datasets using bullets only (React Echarts)"
        content={
          <div id="dot-line-matrix-chart" className="w-full h-[520px]" />
        }
      />
    </div>
  );
};

export default DotLineChart;
