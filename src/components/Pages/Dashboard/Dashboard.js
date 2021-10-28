import React, { useState, useEffect } from "react";
import DashboardChart from "./DashboardChart";
import DashboardLegend from "./DashboardLegend";
import DashboardExpenses from "./DashboardExpenses";
import Navigation from "../../UI/Navigation";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user";
import { Fragment } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.userId.localId);

  const [isLoading, setIsLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch("https://trackwise-b7eaf-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const user = data[id];
        dispatch(userActions.setUserData(user));
        dispatch(userActions.setTotalExpense(user.totalExpenses));
        setIsLoading(false);
        setDataLoaded(true);
      });
  }, [dispatch, id]);

  return (
    <div className="dashboard">
      {isLoading && <LoadingSpinner />}
      {dataLoaded && (
        <Fragment>
          <Navigation />
          <DashboardChart />
          <DashboardLegend />
          <DashboardExpenses />
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
