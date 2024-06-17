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
  ChartOptions,
  Scale,
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

const LineChart = () => {
  // Veri seti
  const options = {};
  const data = {};

  return (
    <div>
      <Line options={options} data={lineChartData} />
    </div>
  );
};

export default LineChart;
