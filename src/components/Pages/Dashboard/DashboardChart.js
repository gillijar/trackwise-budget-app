import React, { useState } from "react";
import PieChart from "../../UI/PieChart";
import DashboardCard from "../../UI/DashboardCard";

const DashboardChart = () => {
  const [chart, setChart] = useState("pie");

  const setPieHandler = () => {
    setChart("pie");
  };

  const setLineHandler = () => {
    setChart("line");
  };

  return (
    <DashboardCard>
      <div className="dashboard__chart">
        {chart === "pie" && (
          <p className="dashboard__chart-title">Monthly Expenses</p>
        )}
        {chart === "line" && (
          <p className="dashboard__chart-title">Yearly Expenses</p>
        )}
        {chart === "pie" && <PieChart />}
        {chart === "line" && <p>This is where the line graph will be</p>}
        <div className="dashboard__chart-icons">
          <i
            className={
              chart === "pie"
                ? "fas fa-chart-pie dashboard__chart-icon active"
                : "fas fa-chart-pie dashboard__chart-icon"
            }
            onClick={setPieHandler}
          ></i>
          <i
            className={
              chart === "line"
                ? "fas fa-chart-line dashboard__chart-icon active"
                : "fas fa-chart-line dashboard__chart-icon"
            }
            onClick={setLineHandler}
          ></i>
        </div>
      </div>
    </DashboardCard>
  );
};

export default DashboardChart;
