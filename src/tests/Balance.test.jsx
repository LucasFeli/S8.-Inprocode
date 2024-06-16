import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import {Balance} from '../components/Balance';

test('renders balance component with mock data', async () => {
  render(
    <Provider store={store}>
      <Balance />
    </Provider>
  );
  
  expect(await screen.findByText(/Balance Total/i)).toBeInTheDocument();
  expect(await screen.findByText(/3323 €/i)).toBeInTheDocument();
  expect(await screen.findByText(/557.46 €/i)).toBeInTheDocument();
  expect(await screen.findByText(/2.4%/i)).toBeInTheDocument();
});
