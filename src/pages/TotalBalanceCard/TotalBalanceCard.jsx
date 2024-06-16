import React from 'react';
import { useSelector } from 'react-redux';
import './TotalBalanceCard.css'; 

export const TotalBalanceCard = () => {
  const totalBalance = useSelector((state) => state.expenses.totalBalance);

  return (
    <div className="total-balance-card">
      <div className="balance-info">
        <span className="balance-label">Balanç total</span>
        <span className="balance-amount">{totalBalance} €</span>
      </div>
      <div className="balance-controls">
        <button className="control-button">{'←'}</button>
        <button className="control-button">{'→'}</button>
      </div>
    </div>
  );
};

