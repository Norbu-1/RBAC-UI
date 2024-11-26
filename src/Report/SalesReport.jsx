import React, { useState } from 'react';

const SalesReport = () => {
  const [period, setPeriod] = useState('daily');

  const salesData = {
    daily: { total: 1500, transactions: 45 },
    weekly: { total: 10500, transactions: 300 },
    monthly: { total: 45000, transactions: 1300 },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Sales Report ({period.charAt(0).toUpperCase() + period.slice(1)})</h3>
      <hr className='mb-4'/>
      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="px-3 py-2 bg-slate-100 border rounded mb-4"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>

      <div className="text-lg">
        <p className='grid grid-cols-2 bg-gray-100 px-2 py-1 rounded rounded-b-none'><strong>Total Sales:</strong> <span>${salesData[period].total}</span> </p>
        <p className='grid grid-cols-2 bg-blue-100 px-2 py-1 rounded rounded-t-none'><strong>Total Transactions:</strong><span>{salesData[period].transactions}</span> </p>
      </div>
    </div>
  );
};

export default SalesReport;
