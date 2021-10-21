import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["", "", "", "", ""],
          datasets: [
            {
              label: "Amount Spent",
              data: [564.75, 168.74, 56.34, 45.23, 39.53],
              backgroundColor: [
                "rgba(250, 40, 191, 0.35)",
                "rgba(58, 235, 75, 0.35)",
                "rgba(30, 147, 255, 0.35)",
                "rgba(243, 167, 54, 0.35)",
                "rgba(206, 210, 217, 0.35)",
              ],
              borderColor: [
                "#fa28bf",
                "#3aeb4b",
                "#1e93ff",
                "#f3a736",
                "#ced2d9",
              ],
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
