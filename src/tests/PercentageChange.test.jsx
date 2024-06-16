import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PercentageChange } from "../components/PercentageChange";

test("renders percentage change component with mock data", async () => {
  render(
    <Provider store={store}>
      <PercentageChange />
    </Provider>
  );

  expect(await screen.findByText(/Variación/i)).toBeInTheDocument();
  expect(await screen.findByText(/2.4%/i)).toBeInTheDocument();
});
