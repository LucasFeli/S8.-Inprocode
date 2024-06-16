import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { TotalBalanceCard } from "../pages/TotalBalanceCard/TotalBalanceCard";
import i18n from "../I18n/i18n";
import { I18nextProvider } from "react-i18next";

const renderWithStoreAndI18n = (locale = "en") => {
  i18n.changeLanguage(locale);

  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <TotalBalanceCard />
      </I18nextProvider>
    </Provider>
  );
};

test("renders total balance card with dynamic balance in English", () => {
  renderWithStoreAndI18n("en");

  expect(screen.getByText(/Total Balance/i)).toBeInTheDocument();
  expect(screen.getByText(/3323 €/i)).toBeInTheDocument();
});

test("renders total balance card with dynamic balance in Spanish", () => {
  renderWithStoreAndI18n("es");

  expect(screen.getByText(/Balance total/i)).toBeInTheDocument();
  expect(screen.getByText(/3323 €/i)).toBeInTheDocument();
});

test("renders total balance card with dynamic balance in Catalan", () => {
  renderWithStoreAndI18n("ca");

  expect(screen.getByText(/Balanç total/i)).toBeInTheDocument();
  expect(screen.getByText(/3323 €/i)).toBeInTheDocument();
});
