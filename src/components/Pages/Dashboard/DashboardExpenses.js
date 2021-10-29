import React from "react";
import DashboardCard from "../../UI/DashboardCard";
import DashboardExpenseItem from "./DashboardExpenseItem";
import { useSelector } from "react-redux";

const DashboardExpenses = () => {
  const expenses = useSelector((state) => state.user.expenses);
  console.log(expenses[0]);

  return (
    <DashboardCard title="Expenses">
      <DashboardExpenseItem />
    </DashboardCard>
  );
};

export default DashboardExpenses;
