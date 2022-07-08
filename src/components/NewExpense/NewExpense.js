import "./NewExpense.css";

import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    changeVisibility();
  };
  const [visibility, setVisibility] = useState(false);

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="new-expense">
      {!visibility && (
        <button onClick={changeVisibility}>Add New Expense</button>
      )}
      {visibility && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          changeVisibility={changeVisibility}
        />
      )}
    </div>
  );
}
