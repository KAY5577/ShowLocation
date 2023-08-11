import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container col-12">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <h3 style={{ textAlign: "center" }}>Performance of YR</h3>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "元融歷年工程實績",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
