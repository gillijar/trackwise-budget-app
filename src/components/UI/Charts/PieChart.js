import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useSelector } from "react-redux";

const PieChartDisplay = (props) => {
  const totalExpenses = useSelector((state) => state.user.totalExpenses);
  const categories = useSelector((state) => state.user.userData.categories);

  const valueOf = (am) => {
    const total = totalExpenses;
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
          {
            title: "bills",
            value: valueOf(categories.bills),
            color: "#FA28BF",
          },
          {
            title: "groceries",
            value: valueOf(categories.groceries),
            color: "#3AEB4B",
          },
          {
            title: "transportation",
            value: valueOf(categories.transportation),
            color: "#1E93FF",
          },
          {
            title: "luxury",
            value: valueOf(categories.luxury),
            color: "#F3A736",
          },
          {
            title: "other",
            value: valueOf(categories.other),
            color: "#CED2D9",
          },
        ]}
      />
      <div className="pie-chart__donut">
        <div>
          <p>Total:</p>
          <p>
            <strong>${totalExpenses}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChartDisplay;
