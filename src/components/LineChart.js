import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <div className="chart-container col-12">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <h3 style={{ textAlign: "center" }}>Performance of YR</h3>
      <Line
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

export default LineChart;
