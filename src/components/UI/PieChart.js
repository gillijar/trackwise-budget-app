import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const PieChartDisplay = () => {
  const valueOf = (am) => {
    const total = 874.59;
    const amount = +((am / total) * 100).toFixed(2);
    return amount;
  };

  return (
    <div className="pie-chart">
      <PieChart
        startAngle={-90}
        paddingAngle={3}
        animate={true}
        animationDuration={1250}
        animationEasing={"ease"}
        data={[
          { title: "One", value: valueOf(564.75), color: "#FA28BF" },
          { title: "Two", value: valueOf(168.74), color: "#3AEB4B" },
          { title: "Three", value: valueOf(56.34), color: "#1E93FF" },
          { title: "Four", value: valueOf(45.23), color: "#F3A736" },
          { title: "Five", value: valueOf(39.53), color: "#CED2D9" },
        ]}
      />
      <div className="pie-chart__donut">
        <div>
          <p>Total:</p>
          <p>
            <strong>$874.59</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChartDisplay;
