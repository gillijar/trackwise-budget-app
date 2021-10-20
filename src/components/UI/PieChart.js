import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const PieChartDisplay = () => {
  return (
    <div className="pie-chart">
      <PieChart
        startAngle={-90}
        paddingAngle={2.25}
        animate={true}
        animationDuration={1250}
        animationEasing={"ease"}
        data={[
          { title: "One", value: 40, color: "#FA28BF" },
          { title: "Two", value: 15, color: "#3AEB4B" },
          { title: "Three", value: 20, color: "#1E93FF" },
          { title: "Four", value: 15, color: "#F3A736" },
          { title: "Five", value: 10, color: "#CED2D9" },
        ]}
      />
      <div className="pie-chart__donut">
        <div>
          <p>
            <strong>$874.59</strong>/
          </p>
          <p>$1300.00</p>
        </div>
      </div>
    </div>
  );
};

export default PieChartDisplay;
