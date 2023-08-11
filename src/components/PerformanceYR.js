import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const PerformanceYR = () => {
  // ===============工程實績數據===============
  const proformanceDatas = {
    labels: [
      "屋頂型",
      "地面型",
      "圳溝型",
      "漁電共生",
      "農電共生",
      "基樁工程",
      "養殖池",
    ],
    datasets: [
      {
        label: "工程實績數據表",
        data: [10, 8, 2, 3, 0, 2, 2],
        backgroundColor: [
          "rgba(255, 99, 71, 0.6)",
          "rgba(255, 165, 0, 0.6)",
          "rgba(0, 206, 209, 0.6)",
          "rgba(30, 144, 255, 0.6)",
          "rgba(123, 104, 238, 0.6)",
          "rgba(154, 205, 50, 0.6)",
          "rgba(255, 105, 180, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // =========================================
  Chart.register(CategoryScale);

  const [chartData, setChartData] = useState(proformanceDatas);

  return (
    <section className="container-filed bg-lightgray">
      <div className="row p-0 m-0 justify-content-center">
        <div className="col-12 col-xxl-11 d-flex flex-wrap justify-content-center">
          {/* ====================== */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5">
            <div className="col-11 border bg-light shadow p-3 d-flex justify-content-center align-items-center">
              <BarChart chartData={chartData} />
            </div>
          </div>
          {/* ====================== */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5">
            <div className="col-11 border bg-light shadow p-3 d-flex justify-content-center align-items-center">
              <LineChart chartData={chartData} />
            </div>
          </div>
          {/* ====================== */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5">
            <div className="col-11 border bg-light shadow p-3 d-flex justify-content-center align-items-center">
              <PieChart chartData={chartData} />
            </div>
          </div>
          {/* ====================== */}
        </div>
      </div>
    </section>
  );
};

export default PerformanceYR;
