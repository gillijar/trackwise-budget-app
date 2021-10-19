import React from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import PieChart from "./PieChart";

const Dashboard = () => {
  const { search } = useLocation();
  const { path } = useRouteMatch();

  return (
    <div className="dashboard">
      <nav className="dashboard__nav">
        <p className="dashboard__nav--user">User's Dashboard</p>
        <p className="dashboard__nav--dropdown">+</p>
      </nav>
      <div className="dashboard__chart">
        <p className="dashboard__chart-title">Monthly Expenses</p>
        {(search === "?chart=pie" || search === "") && <PieChart />}
        {search === "?chart=line" && (
          <p>This is where the line graph will be</p>
        )}
        <div className="dashboard__chart-icons">
          <NavLink to={`${path}?chart=pie`} activeClassName="active">
            <i className="fas fa-chart-pie dashboard__chart-icon icon-test"></i>
          </NavLink>
          <NavLink to={`${path}?chart=line`} activeClassName="active">
            <i className="fas fa-chart-line dashboard__chart-icon"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
