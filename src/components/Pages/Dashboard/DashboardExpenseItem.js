import React from "react";

const DashboardExpenseItem = (props) => {
  return (
    <li className="expense__item">
      <div className="expense__item-description">
        <div className="expense__item-tag"></div>
        <p className="expense__item-title">{props.title}</p>
      </div>
      <p className="expense__item-price">{props.amount}</p>
    </li>
  );
};

export default DashboardExpenseItem;
