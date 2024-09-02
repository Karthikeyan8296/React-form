import { useState } from "react";
import Form from "./components/Forms";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import ExpenseList from "./Expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "bottle", amount: 10, category: "stored" },
    { id: 2, description: "bottle", amount: 10, category: "stored" },
    { id: 3, description: "bottle", amount: 10, category: "stored" },
    { id: 4, description: "bottle", amount: 10, category: "stored" },
  ]);

  return (
    <>
      <ExpenseForm />
      <ExpenseList
        expenses={expenses}
        onDeleted={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
