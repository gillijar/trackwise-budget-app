import React from "react";
import DashboardCard from "../../UI/DashboardCard";
import DashboardExpenseItem from "./DashboardExpenseItem";

const DashboardExpenses = () => {
  return (
    <DashboardCard title="Expenses">
      <DashboardExpenseItem />
    </DashboardCard>
  );
};

export default DashboardExpenses;
