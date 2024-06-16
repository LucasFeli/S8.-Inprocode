import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ExpensesView from '../pages/ExpensesView/ExpensesView';

test('renders expenses view with chart and today expense', async () => {
  render(
    <Provider store={store}>
      <ExpensesView />
    </Provider>
  );

  expect(screen.getByText(/Despeses - Última setmana/i)).toBeInTheDocument();
  expect(screen.getByText(/Despeses avui/i)).toBeInTheDocument();
  expect(screen.getByText(/557.46 €/i)).toBeInTheDocument();
  expect(screen.getByText(/\+2.4% respecte a ahir/i)).toBeInTheDocument();
});
