import { useSelector } from "react-redux";
import { ExpensesChart } from "../../components/ExpensesChart";
import "./ExpensesView.css";

export const ExpensesView = () => {
  const todayExpense = useSelector((state) => state.expenses.todayExpense);
  const percentageChange = useSelector(
    (state) => state.expenses.percentageChange
  );

  return (
    <div className="expenses-view">
      <h2>Despeses - Última setmana</h2>
      <ExpensesChart />
      <div className="today-expense">
        <div className="expense-label">Despeses avui</div>
        <div className="expense-amount"> €</div>
        <div className="percentage-change">
          <span>
           
          </span>
          <span> respecte a ahir</span>
        </div>
      </div>
    </div>
  );
};
