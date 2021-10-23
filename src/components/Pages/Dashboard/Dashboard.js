import React from "react";
import DashboardChart from "./DashboardChart";
import DashboardLegend from "./DashboardLegend";
import Navigation from "../../UI/Navigation";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <DashboardChart />
      <DashboardLegend />
    </div>
  );
};

export default Dashboard;
