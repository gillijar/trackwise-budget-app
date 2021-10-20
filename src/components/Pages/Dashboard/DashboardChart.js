import React, { useState } from "react";
import PieChart from "../../UI/PieChart";
import BarChart from "../../UI/BarChart";
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
        <p className="dashboard__chart-title">Monthly Expenses</p>
        {chart === "pie" && <PieChart />}
        {chart === "line" && <BarChart />}
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
