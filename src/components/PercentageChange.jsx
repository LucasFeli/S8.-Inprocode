
import { useSelector } from 'react-redux';

export const PercentageChange = () => {
  const percentageChange = useSelector((state) => state.expenses.percentageChange);

  return <div>Variación: {percentageChange}% respecto a ayer</div>;
};

 