import { useState } from "react";
import Form from "./components/Forms";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm";
import ExpenseList from "./Expense-tracker/components/ExpenseList";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "bottle", amount: 10, category: "Utilities" },
    { id: 2, description: "bottle", amount: 10, category: "Entertainment" },
    { id: 3, description: "bottle", amount: 10, category: "Utilities" },
    { id: 4, description: "bottle", amount: 10, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <ExpenseForm />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <div className="mb-3"></div>
      <ExpenseList
        expenses={visibleExpenses}
        onDeleted={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
