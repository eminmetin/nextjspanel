'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';

const LineChart = () => {
  // Veri seti
  const data = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
    datasets: [
      {
        label: 'Satışlar',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        data: [250, 310, 280, 450, 370, 520],
      },
    ],
  };

  // Ayarlar
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Aylık Satış Grafiği',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      } as Scale,
    },
  };

  return (
    <div>
      <h2>Aylık Satış Grafiği</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
