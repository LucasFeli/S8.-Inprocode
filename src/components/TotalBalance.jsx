import React from 'react';
import { useSelector } from "react-redux";

export const TotalBalance = () => {
  const totalBalance = useSelector((state) => state.expenses.totalBalance);

  return <div>Balance Total: {totalBalance} €</div>;
};
