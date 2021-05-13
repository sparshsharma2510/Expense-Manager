import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, changeSelectedYear] = useState("2021");

  const onFilter = (year) => {
    changeSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter defaultYear={selectedYear} onYearChange={onFilter} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default Expenses;
