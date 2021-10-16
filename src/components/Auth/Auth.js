import React from "react";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const history = useHistory();

  const login = () => {
    history.push("/login");
  };

  const createAccount = () => {
    history.push("/create-account");
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

export default Auth;
