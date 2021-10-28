import React, { useState, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [navOpen, setNavOpen] = useState(false);
  const user = useSelector((state) => state.user.userData);
  const metaData = useSelector((state) => state.user.userId);
  console.log(user.totalExpenses);

  const enteredExpenseRef = useRef();
  const enteredAmountRef = useRef();
  const enteredCategoryRef = useRef();

  const openNavHandler = () => {
    setNavOpen((prevState) => !prevState);
  };

  const logoutUserHandler = () => {
    dispatch(userActions.logoutUser());
    localStorage.removeItem("localId");

    history.replace("/");
  };

  const submitForm = (e) => {
    e.preventDefault();

    const enteredExpense = enteredExpenseRef.current.value;
    const enteredAmount = enteredAmountRef.current.value;
    const enteredCategory = enteredCategoryRef.current.value;

    console.log(enteredExpense, enteredAmount, enteredCategory);

    fetch(
      `https://trackwise-b7eaf-default-rtdb.firebaseio.com/users/${metaData.localId}/expenses.json`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: enteredCategory,
          price: enteredAmount,
          title: enteredExpense,
        }),
      }
    );

    fetch(
      `https://trackwise-b7eaf-default-rtdb.firebaseio.com/users/${metaData.localId}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalExpenses: +user.totalExpenses + +enteredAmount,
        }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then(() => {
        dispatch(userActions.addTotalExpenses(enteredAmount));
      });
  };

  return (
    <nav className="dashboard__nav">
      <div className="dashboard__nav--info">
        <p className="dashboard__nav--user">{user.firstName}'s Dashboard</p>
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
              <Input
                placeholder="Expense Name"
                ref={enteredExpenseRef}
                required="required"
              />
            </div>
            <div className="confirm__container--form-input">
              <Input
                placeholder="Expense Amount"
                ref={enteredAmountRef}
                required="required"
              />
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

          <Button btnClass="btn logout" onClick={logoutUserHandler}>
            Logout
          </Button>

          <div className="dashboard__nav-settings">
            <i className="fas fa-cog dashboard__nav-settings--icon"></i>
          </div>
        </Fragment>
      )}
    </nav>
  );
};

export default Navigation;
