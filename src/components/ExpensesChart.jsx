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

  const data = {
    labels: ['dl', 'dt', 'dc', 'dj', 'dv', 'ds', 'dg'],
    datasets: [
      {
        label: 'Despeses - Última setmana',
        data: weeklyExpenses,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

