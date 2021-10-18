import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Greet = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/auth");
    }, 2750);
  }, [history]);

  return (
    <div className="greeting">
      <p>Welcome Back, User!</p>

      <div className="greeting__bubble">
        <div className="greeting__bubble--main"></div>
        <div className="greeting__bubble--secondary"></div>
      </div>
    </div>
  );
};

export default Greet;
