import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";

const AuthLogin = () => {
  const APIKey = "AIzaSyAmDf_ayrM-XIbiKeLlrcvW3nrxx5KxFJE";
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKey}`;

    // sending request to api and getting a response object
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const errorMessage = data.error.message;

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        history.replace("/greet"); // will need to be dynamically routed to users personal feed later
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="confirm">
      <div className="confirm__container">
        <p className="confirm__container--p">Sign In to Your Account</p>
        <form className="confirm__container--form" onSubmit={submitForm}>
          <div className="confirm__container--form-input">
            <i className="fas fa-at icon"></i>
            <Input type="email" placeholder="Email" ref={emailInputRef} />
          </div>
          <div className="confirm__container--form-input">
            <i className="fas fa-lock icon"></i>
            <Input
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
            />
          </div>
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
