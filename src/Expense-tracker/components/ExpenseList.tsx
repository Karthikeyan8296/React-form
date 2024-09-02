
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDeleted: (id: number) => void;
}

const ExpenseList = ({ expenses, onDeleted }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className="table table-borderd">
      <thead>
        <tr>
          <th>Discription</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expenses) => (
          <tr key={expenses.id}>
            <td>{expenses.description}</td>
            <td>{expenses.amount}</td>
            <td>{expenses.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleted(expenses.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expenses) => expenses.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
