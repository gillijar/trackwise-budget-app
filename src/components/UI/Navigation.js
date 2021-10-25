import React, { useState, Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const user = useSelector((state) => state.user.name);

  const enteredExpenseRef = useRef();
  const enteredAmountRef = useRef();
  const enteredCategoryRef = useRef();

  const openNavHandler = () => {
    setNavOpen((prevState) => !prevState);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const enteredExpense = enteredExpenseRef.current.value;
    const enteredAmount = enteredAmountRef.current.value;
    const enteredCategory = enteredCategoryRef.current.value;

    console.log(enteredExpense, enteredAmount, enteredCategory);
  };

  return (
    <nav className="dashboard__nav">
      <div className="dashboard__nav--info">
        <p className="dashboard__nav--user">{user}'s Dashboard</p>
        {!navOpen && (
          <p className="dashboard__nav--dropdown" onClick={openNavHandler}>
            +
          </p>
        )}
        {navOpen && (
          <p className="dashboard__nav--dropdown" onClick={openNavHandler}>
            -
          </p>
        )}
      </div>
      {navOpen && (
        <Fragment>
          <form className="dashboard__nav--form" onSubmit={submitForm}>
            <div className="confirm__container--form-input">
              <Input placeholder="Expense Name" ref={enteredExpenseRef} />
            </div>
            <div className="confirm__container--form-input">
              <Input placeholder="Expense Amount" ref={enteredAmountRef} />
            </div>
            <select
              name="category"
              id="category"
              ref={enteredCategoryRef}
              required
            >
              <option defaultValue hidden>
                Select a category
              </option>
              <option>Bills</option>
              <option>Groceries</option>
              <option>Transportation</option>
              <option>Luxury</option>
              <option>Other</option>
            </select>
            <Button btnClass="btn" type="submit">
              Add Expense
            </Button>
          </form>

          <div className="dashboard__nav-settings">
            <i className="fas fa-cog dashboard__nav-settings--icon"></i>
          </div>
        </Fragment>
      )}
    </nav>
  );
};

export default Navigation;
