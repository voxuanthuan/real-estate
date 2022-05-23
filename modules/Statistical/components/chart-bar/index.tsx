import React from 'react'
import { Bar, Line } from 'react-chartjs-2';
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
PointElement,
LineElement,
Filler
} from 'chart.js';
import styles from './styles.module.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);


interface IProps {
  color: string,
  type: string,
  label: string,
  borderColor: string,
}

function ChartBar (props: IProps) {
  const {color, type, label, borderColor} = props
  const options = {
    type: 'line',
    responsive: true,
    maintainAspectRatio: false,
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
        label: label,
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: color,
        borderColor: borderColor,
        borderWidth: 2,
        borderRadius: 20,
        fill: true,
        tension: 0,
      },
    ],
  };

  return type === 'bar' ? <Bar options={options} data={data}/> : <Line options={options} data={data}/>
}

export default React.memo(ChartBar)