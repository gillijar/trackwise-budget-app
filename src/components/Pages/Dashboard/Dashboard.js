import React, { useState } from "react";
import DashboardCard from "../../UI/DashboardCard";
import DashboardLegend from "./DashboardLegend";
import PieChart from "../PieChart";

const Dashboard = () => {
  const [chart, setChart] = useState("pie");

  const setPieHandler = () => {
    setChart("pie");
  };

  const setLineHandler = () => {
    setChart("line");
  };

  return (
    <div className="dashboard">
      <nav className="dashboard__nav">
        <p className="dashboard__nav--user">User's Dashboard</p>
        <p className="dashboard__nav--dropdown">+</p>
      </nav>
      <DashboardCard>
        <div className="dashboard__chart">
          <p className="dashboard__chart-title">Monthly Expenses</p>
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
      <DashboardLegend />
    </div>
  );
};

export default Dashboard;
