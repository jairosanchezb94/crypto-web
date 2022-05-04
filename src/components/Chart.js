import React from "react";
import Chart from "react-apexcharts";

const ChartDetail = ({ data, name }) => {
  const aux = data.map(
    (h) => `${h.date.split("T")[0]} ${h.date.split("T")[1].split(":00.")[0]}hs`
  );
  const inicio = aux[0];
  const fin = aux[aux.length - 1];

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      row: {
        colors: ["#f9fafb", "transparent"],
        opacity: 0.15,
      },
    },
    colors: ["#581c87"],
    xaxis: {
      type: "category",
      categories: data.map((h) => h.date.split("T")[1].split(":00.")[0]),
      labels: {
        show: true,
        rotate: -45,
        style: {
          colors: [],
          fontSize: "8px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      show: true,
      decimalsInFloat: 2,
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [],
          fontSize: "8px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },
  };
  const series = [
    {
      name: name,
      data: data.map((h) => parseFloat(h.priceUsd).toFixed(4)),
      colors: ["#546E7A", "#E91E63"],
    },
  ];

  return (
    <div className="w-full h-5/6">
      <div className="w-full flex flex-row justify-center">
        <div className="px-2 text-sm font-base text-left text-gray-900">
          <spam className="font-medium">Desde:</spam> {inicio}
        </div>
        <div className="px-2 text-sm font-base text-left text-gray-900">
          <spam className="font-medium"> Hasta:</spam> {fin}
        </div>
      </div>
      <Chart options={options} series={series} type="line" height="100%" />
    </div>
  );
};

export default ChartDetail;
