import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js';
import styles from './styles.module.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartBar () {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
  };

  const labels = ['Q1', 'A2', 'T.Bình', 'T.Đức', 'Q3', 'Q4', 'Q10', 'Q12', 'Q11'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Độ năng động của thị trường',
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: '#4881ea',
        borderColor: '#3877eb',
        borderWidth: 2,
        borderRadius: 20,
      },
    ],
  };

  return <Bar options={options} data={data}/>
}

export default React.memo(ChartBar)