import React from 'react';
import { Line, Bar } from 'react-chartjs-2'; 
import 'chart.js/auto'; 

const MainDashboard = ({userdata}) => {
 
  const quickStats = [
    { label: 'Total Orders', value: 350 },
    { label: 'Total Sales', value: '$15,250' },
    { label: 'Pending Reservations', value: 12 },
  ];

  // Sales Line Chart Data
  const salesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Sales',
        data: [120, 200, 150, 300, 250, 400, 350],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Inventory Bar Chart Data
  const inventoryData = {
    labels: ['Tomatoes', 'Cheese', 'Bread', 'Milk', 'Eggs'],
    datasets: [
      {
        label: 'Inventory Levels',
        data: [20, 5, 15, 8, 12],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 rounded min-h-screen border bg-blue-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-gray-700 font-semibold">Welcome!</p>
            <p className="text-gray-500 text-sm">Role: {userdata.role}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-700">{stat.value}</h2>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales Trend</h2>
          <Line data={salesData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Inventory Overview</h2>
          <Bar data={inventoryData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Orders</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-700">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2">ORD001</td>
              <td className="py-2">Alice Johnson</td>
              <td className="py-2 text-green-500">Completed</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">ORD002</td>
              <td className="py-2">Michael Smith</td>
              <td className="py-2 text-yellow-500">Pending</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">ORD003</td>
              <td className="py-2">Sanjeev Kapoor</td>
              <td className="py-2 text-red-500">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Alerts/Notifications */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Alerts & Notifications</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-yellow-100 text-yellow-700 rounded-lg">
            ⚠️ Low stock warning: Cheese
          </li>
          <li className="p-4 bg-blue-100 text-blue-700 rounded-lg">
            ℹ️ System update scheduled at 2:00 AM.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainDashboard;
