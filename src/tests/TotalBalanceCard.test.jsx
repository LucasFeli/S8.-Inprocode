import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import {TotalBalanceCard} from '../pages/TotalBalanceCard/TotalBalanceCard';

test('renders total balance card with correct balance', async () => {
  render(
    <Provider store={store}>
      <TotalBalanceCard />
    </Provider>
  );

  expect(screen.getByText(/Balanç total/i)).toBeInTheDocument();
  expect(screen.getByText(/3323 €/i)).toBeInTheDocument();
});
