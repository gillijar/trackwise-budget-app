import React from "react";
import { Link } from "react-router-dom";
import Input from "../UI/Input";

const AuthCreateAccount = () => {
  return (
    <div className="confirm">
      <div className="confirm__container">
        <p className="confirm__container--p">Create New Account</p>
        <form className="confirm__container--form">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <button type="submit">Create Account</button>
        </form>
        <p className="confirm__change-auth">
          Already have an account?{" "}
          <Link to="/auth/login">
            <span>Sign in here</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthCreateAccount;
