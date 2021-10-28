import React from "react";

const DashboardExpenseItem = () => {
  return (
    <li className="expense__item">
      <div className="expense__item-description">
        <div className="expense__item-tag"></div>
        <p className="expense__item-title">Kroger</p>
      </div>
      <p className="expense__item-price">$103.76</p>
    </li>
  );
};

export default DashboardExpenseItem;
