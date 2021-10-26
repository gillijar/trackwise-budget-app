import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user";

const Greet = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.userId.localId);

  fetch("https://trackwise-b7eaf-default-rtdb.firebaseio.com/users.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const user = data[id];
      dispatch(userActions.setUserData(user));

      setTimeout(() => {
        history.push("/dashboard");
      }, 1500);
    });

  return (
    <div className="greeting">
      <p>Welcome Back!</p>

      <div className="greeting__bubble">
        <div className="greeting__bubble--main"></div>
        <div className="greeting__bubble--secondary"></div>
      </div>
    </div>
  );
};

export default Greet;
