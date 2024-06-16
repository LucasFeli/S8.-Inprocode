import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import React from "react";
import { TotalBalance } from "../components/TotalBalance";

test("renders total balance component with mock data", async () => {
  render(
    <Provider store={store}>
      <TotalBalance />
    </Provider>
  );

  expect(await screen.findByText(/Balance Total/i)).toBeInTheDocument();
  expect(await screen.findByText(/3323 €/i)).toBeInTheDocument();
});
