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
              data: [564.75, 168.74, 83.75, 164.97, 29.08],
              backgroundColor: [
                "#fa28bf",
                "#3aeb4b",
                "#1e93ff",
                "#f3a736",
                "#ced2d9",
              ],
              borderColor: [
                "#fa28bf",
                "#3aeb4b",
                "#1e93ff",
                "#f3a736",
                "#ced2d9",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
