import React from 'react';
import BarChart from './charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Customer',
        data: [
          0, 140000, 200000, 380000, 0, 0,
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Garage',
        data: [
          0, 650000, 1420000, 700000, 0, 0,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo?.[500]??'#6366F1',
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Users VS Garage</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
