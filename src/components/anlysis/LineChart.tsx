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
import { lineChartData } from '../anlysis/data';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
);

const LineChart = ({ className }: any) => {
  const options: any = {
    plugins: {
      legend: false,
    },
    maintainAspectRatio: false,
    scales: {
      // to remove the y-axis labels
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: true,
        },
      },
    },
  };

  return (
    <Line
      className={`h-full ${className}`}
      options={options}
      data={lineChartData}
    />
  );
};

export default LineChart;
