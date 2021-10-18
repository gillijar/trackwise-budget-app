import React from "react";
import { Link } from "react-router-dom";
import Input from "../UI/Input";

const AuthLogin = () => {
  return (
    <div className="confirm">
      <div className="confirm__container">
        <p className="confirm__container--p">Sign In to Your Account</p>
        <form className="confirm__container--form">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p className="confirm__change-auth">
          Don't have an account?{" "}
          <Link to="/auth/create-account">
            <span>Sign up here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLogin;
