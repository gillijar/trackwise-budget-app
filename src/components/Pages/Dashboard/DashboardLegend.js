import React from "react";
import DashboardCard from "../../UI/DashboardCard";
import DashboardLegendItem from "./DashboardLegendItem";

const DashboardLegend = () => {
  const items = [
    {
      name: "Bills",
      price: 564.75,
      id: 1,
    },
    {
      name: "Groceries",
      price: 168.74,
      id: 2,
    },
    {
      name: "Transportation",
      price: 83.75,
      id: 3,
    },
    {
      name: "Luxury",
      price: 164.97,
      id: 4,
    },
    {
      name: "Other",
      price: 29.08,
      id: 5,
    },
  ];

  return (
    <DashboardCard>
      <p className="legend__title">Legend</p>
      <div className="legend__container">
        <ul>
          {items.map((item) => (
            <DashboardLegendItem
              key={item.id}
              name={item.name}
              color={item.color}
              price={item.price}
              id={item.id}
            />
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
};

export default DashboardLegend;
