import React from "react";
import { useHistory } from "react-router";
import Input from "../UI/Input";
import Button from "../UI/Button";

const CreateAccount = () => {
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    history.push("/dashboard");
  };

  return (
    <div className="confirm">
      <div className="confirm__container">
        <p className="confirm__container--p">Sign In to Your Account</p>
        <form className="confirm__container--form" onSubmit={submitForm}>
          <div className="confirm__container--form-input">
            <Input type="text" placeholder="First Name" required="required" />
          </div>
          <div className="confirm__container--form-input">
            <Input type="text" placeholder="Last Name (optional)" />
          </div>
          <div className="confirm__container--form-input">
            <Input
              type="number"
              min="0"
              max="100"
              placeholder="Age (optional)"
            />
          </div>
          <div className="confirm__container--dropdown">
            {/* <label for="goals">What is your goal with this app?</label> */}
            <select name="goals" id="goals">
              <option disabled selected hidden>
                What are your goals with this app?
              </option>
              <option>Better budget managing</option>
              <option>Save money over a longer period of time</option>
              <option>Fill in for future choice</option>
              <option>Another fill in for another future choice</option>
              <option>Other</option>
            </select>
          </div>
          <Button type="submit">Create Account</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
