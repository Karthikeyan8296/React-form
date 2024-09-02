import React from "react";

const ExpenseForm = () => {
  return (
    <>
      <h3 className="title">
        <strong>Calculate your Expenses</strong>
      </h3>

      <form>
        <div className="mb-3">
          <label htmlFor="description" className="form-lable">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="Amount" className="form-lable">
            Amount
          </label>
          <input id="Amount" type="number" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="Amount" className="form-lable">
            Category
          </label>
          <select className="form-select" id="inputGroupSelect">
            <option selected></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
