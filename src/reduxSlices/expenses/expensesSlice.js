import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalBalance: 3323,
  todayExpense: 557.46,
  percentageChange: 2.4,
  weeklyExpenses: [0, 200, 300, 250, 200, 180, 400,500],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setTotalBalance: (state, action) => {
      state.totalBalance = action.payload;
    },
    setTodayExpense: (state, action) => {
      state.todayExpense = action.payload;
    },
    setPercentageChange: (state, action) => {
      state.percentageChange = action.payload;
    },
    setWeeklyExpenses: (state, action) => {
      state.weeklyExpenses = action.payload;
    },
  },
});

export const { setTotalBalance, setTodayExpense, setPercentageChange, setWeeklyExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;
