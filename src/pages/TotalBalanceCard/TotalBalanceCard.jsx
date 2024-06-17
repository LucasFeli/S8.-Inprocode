import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "./TotalBalanceCard.css";

export const TotalBalanceCard = () => {
  const { t } = useTranslation();
  const totalBalance = useSelector((state) => state.expenses.totalBalance);

  return (
    <div className="total-balance-card">
      <div className="balance-info">
        <span className="balance-label">{t("total_balance")}</span>
        <span className="balance-amount">{totalBalance} {t("currency")}</span>
      </div>
      <div className="balance-controls">
        <button className="control-button">{"←"}</button>
        <button className="control-button">{"→"}</button>
      </div>
    </div>
  );
};
