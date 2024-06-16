
import { TotalBalance } from '../TotalBalance';
import { TodayExpense } from '../TodayExpense';
import { PercentageChange } from '../PercentageChange';

export const Balance = () => {
  
  return (
    <div>
      <TotalBalance/>
      <TodayExpense/>
      <PercentageChange/>
    </div>
  );
};




