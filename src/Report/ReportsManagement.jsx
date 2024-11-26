import React, { useState } from 'react';
import SalesReport from './SalesReport';
import StaffPerformance from './StaffPerformance';
import InventoryUsage from './InventoryUsage';

const ReportsManagement = () => {
  const [activeReport, setActiveReport] = useState('sales');

  return (
    <div className="container mx-auto p-4 border rounded h-full bg-blue-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Reports Overview</h2>

      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded ${activeReport === 'sales' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveReport('sales')}
        >
          Sales Report
        </button>
        <button
          className={`py-2 px-4 rounded ${activeReport === 'staff' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveReport('staff')}
        >
          Staff Performance
        </button>
        <button
          className={`py-2 px-4 rounded ${activeReport === 'inventory' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveReport('inventory')}
        >
          Inventory Usage
        </button>
      </div>

      {activeReport === 'sales' && <SalesReport />}
      {activeReport === 'staff' && <StaffPerformance />}
      {activeReport === 'inventory' && <InventoryUsage />}
    </div>
  );
};

export default ReportsManagement;
