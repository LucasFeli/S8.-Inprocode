import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ExpensesChart } from "../../components/ExpensesChart";
import "./ExpensesView.css";

export const ExpensesView = () => {
  const { t } = useTranslation();
  const todayExpense = useSelector((state) => state.expenses.todayExpense);
  const percentageChange = useSelector(
    (state) => state.expenses.percentageChange
  );

  return (
    <div className="expenses-view">
      <h2>{t("weekly_expenses")}</h2>
      <ExpensesChart />
      <div className="today-expense">
        <div className="expense-label">{t("today_expenses")}</div>
        <div className="expense-amount">{todayExpense} €</div>
        <div className="percentage-change">
          <span>
            {percentageChange > 0
              ? `+${percentageChange}%`
              : `${percentageChange}%`}
          </span>
          <span>{t("respect_yesterday")}</span>
        </div>
      </div>
    </div>
  );
};
