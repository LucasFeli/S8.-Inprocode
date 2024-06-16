import React from 'react';
import { useSelector } from "react-redux";

export const TodayExpense = () => {
  const todayExpense = useSelector((state) => state.expenses.todayExpense);

  return <div>Gasto de Hoy: {todayExpense} €</div>;
};


