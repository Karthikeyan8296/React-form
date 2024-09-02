import React from "react";
import { categories } from "../../App";

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
          <select className="form-select" id="form-select">
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div> 

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
