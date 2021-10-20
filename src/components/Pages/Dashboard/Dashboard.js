import React from "react";
import DashboardChart from "./DashboardChart";
import DashboardLegend from "./DashboardLegend";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="dashboard__nav">
        <p className="dashboard__nav--user">User's Dashboard</p>
        <p className="dashboard__nav--dropdown">+</p>
      </nav>
      <DashboardChart />
      <DashboardLegend />
    </div>
  );
};

export default Dashboard;
