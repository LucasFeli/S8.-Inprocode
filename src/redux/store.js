import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../reduxSlices/expenses/expensesSlice';

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});
