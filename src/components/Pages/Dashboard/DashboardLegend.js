import React from "react";
import DashboardCard from "../../UI/DashboardCard";
import DashboardLegendItem from "./DashboardLegendItem";
import { useSelector } from "react-redux";

const DashboardLegend = () => {
  const categories = useSelector((state) => state.user.userData.categories);

  const items = [
    {
      name: "Bills",
      price: categories.bills,
      id: 1,
    },
    {
      name: "Groceries",
      price: categories.groceries,
      id: 2,
    },
    {
      name: "Transportation",
      price: categories.transportation,
      id: 3,
    },
    {
      name: "Luxury",
      price: categories.luxury,
      id: 4,
    },
    {
      name: "Other",
      price: categories.other,
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
