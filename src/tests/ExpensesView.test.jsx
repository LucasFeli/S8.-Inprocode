import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ExpensesView from "../pages/ExpensesView/ExpensesView";
import i18n from "../I18n/i18n";
import { I18nextProvider } from "react-i18next";

const renderWithStoreAndI18n = (locale = "en") => {
  i18n.changeLanguage(locale);

  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ExpensesView />
      </I18nextProvider>
    </Provider>
  );
};

test("renders expenses view with dynamic data in English", () => {
  renderWithStoreAndI18n("en");

  expect(screen.getByText(/Expenses - Last Week/i)).toBeInTheDocument();
  expect(screen.getByText(/Today's Expenses/i)).toBeInTheDocument();
  expect(screen.getByText(/645.32 €/i)).toBeInTheDocument();
  expect(screen.getByText(/\+1.5% compared to yesterday/i)).toBeInTheDocument();
});

test("renders expenses view with dynamic data in Spanish", () => {
  renderWithStoreAndI18n("es");

  expect(screen.getByText(/Despeses - Última setmana/i)).toBeInTheDocument();
  expect(screen.getByText(/Despeses avui/i)).toBeInTheDocument();
  expect(screen.getByText(/645.32 €/i)).toBeInTheDocument();
  expect(screen.getByText(/\+1.5% respecte a ahir/i)).toBeInTheDocument();
});

test("renders expenses view with dynamic data in Catalan", () => {
  renderWithStoreAndI18n("ca");

  expect(screen.getByText(/Despeses - Última setmana/i)).toBeInTheDocument();
  expect(screen.getByText(/Despeses avui/i)).toBeInTheDocument();
  expect(screen.getByText(/645.32 €/i)).toBeInTheDocument();
  expect(screen.getByText(/\+1.5% respecte a ahir/i)).toBeInTheDocument();
});
