import React from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";

const AuthLogin = () => {
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    history.push("/greet");
  };

  return (
    <div className="confirm">
      <div className="confirm__container">
        <p className="confirm__container--p">Sign In to Your Account</p>
        <form className="confirm__container--form" onSubmit={submitForm}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
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
