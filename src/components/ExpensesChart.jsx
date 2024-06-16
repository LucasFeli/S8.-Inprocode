import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ExpensesChart = () => {
  const weeklyExpenses = useSelector((state) => state.expenses.weeklyExpenses);

  const backgroundColors = weeklyExpenses.map((expense, index) =>
    index === weeklyExpenses.length - 2 ? 'rgb(54, 162, 235)' : 'rgb(242, 125, 96)'
  );

  const data = {
    labels: ['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'],
    datasets: [
      {
        label: 'Despeses - Última setmana',
        data: weeklyExpenses,
        backgroundColor: backgroundColors,
       
      },
    ],
  };

  return <Bar data={data} />;
};

