import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { TodayExpense } from "../components/TodayExpense";

test("renders today expense component with mock data", async () => {
  render(
    <Provider store={store}>
      <TodayExpense />
    </Provider>
  );

  expect(await screen.findByText(/Gasto de Hoy/i)).toBeInTheDocument();
  expect(await screen.findByText(/557.46 €/i)).toBeInTheDocument();
});
