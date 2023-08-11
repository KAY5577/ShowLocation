import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  return (
    <div className="chart-container col-12 col-lg-9 d-flex flex-column">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <h3 style={{ textAlign: "center" }}>Performance of YR</h3>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "元融歷年工程實績",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
