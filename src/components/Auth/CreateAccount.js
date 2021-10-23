import React, { useRef } from "react";
import { useHistory } from "react-router";
import Input from "../UI/Input";
import Button from "../UI/Button";

const CreateAccount = () => {
  const history = useHistory();

  const enteredFirstNameRef = useRef();
  const enteredLastNameRef = useRef();
  const enteredAgeRef = useRef();
  const enteredGoalRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    const enteredFirstName = enteredFirstNameRef.current.value;
    const enteredLastName = enteredLastNameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;
    const enteredGoal = enteredGoalRef.current.value;

    console.log(enteredFirstName, enteredLastName, enteredAge, enteredGoal);

    history.push("/dashboard");
  };

  return (
    <div className="confirm">
      <div className="confirm__container">
        <p className="confirm__container--p">Sign In to Your Account</p>
        <form className="confirm__container--form" onSubmit={submitForm}>
          <div className="confirm__container--form-input">
            <Input
              type="text"
              placeholder="First Name"
              required="required"
              ref={enteredFirstNameRef}
            />
          </div>
          <div className="confirm__container--form-input">
            <Input
              type="text"
              placeholder="Last Name (optional)"
              ref={enteredLastNameRef}
            />
          </div>
          <div className="confirm__container--form-input">
            <Input
              type="number"
              min="0"
              max="100"
              placeholder="Age (optional)"
              ref={enteredAgeRef}
            />
          </div>
          <div className="confirm__container--dropdown">
            {/* <label for="goals">What is your goal with this app?</label> */}
            <select name="goals" id="goals" ref={enteredGoalRef}>
              <option defaultValue hidden>
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
