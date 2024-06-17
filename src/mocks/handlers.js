import { http  } from 'msw';

export const handlers = [
  http.get('/api/expenses', (res, ctx) => {
    return res(
      ctx.json({
        totalBalance: 3323,
        todayExpense: 557.46,
        percentageChange: 2.4,
        weeklyExpenses: [100, 200, 300, 250, 200, 180, 400],
      })
    );
  }),
];
