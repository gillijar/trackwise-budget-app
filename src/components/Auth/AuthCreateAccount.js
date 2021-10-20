import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";

const AuthCreateAccount = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  console.log(path);

  const submitForm = (e) => {
    e.preventDefault();

    history.push(`${path}/new-user`);
  };

  return (
    <div className="confirm">
      <div className="confirm__container">
        <p className="confirm__container--p">Create New Account</p>
        <form className="confirm__container--form" onSubmit={submitForm}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Button type="submit">Create Account</Button>
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
