import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const AuthHome = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const login = () => {
    history.push(`${pathname}/login`);
  };

  const createAccount = () => {
    history.push(`${pathname}/create-account`);
  };

  return (
    <div className="auth">
      <div className="auth__attention">
        <h1 className="auth__attention--title">
          Track<span>Wise</span>
        </h1>
        <p className="auth__attention--slogan">Saving Money Should Be Fun</p>
      </div>

      <div className="auth__option">
        <div className="auth__option--container">
          <button className="btn" onClick={login}>
            Login
          </button>
          <button className="btn" onClick={createAccount}>
            Create Account
          </button>
        </div>
      </div>

      <div className="auth__bubble">
        <div className="auth__bubble--main"></div>
        <div className="auth__bubble--secondary"></div>
      </div>
    </div>
  );
};

export default AuthHome;
