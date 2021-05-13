import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [clicked, setClicked] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };

  const renderExpenseForm = () => {
    setClicked((prevClickVal) => {
        return !prevClickVal;
    });
  };

  return (
    <div className="new-expense">
      {clicked ? (
        <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        cancelNewExpense={renderExpenseForm}
        />
        ) : (
        <button type="button" onClick={renderExpenseForm}>
          Add Expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
