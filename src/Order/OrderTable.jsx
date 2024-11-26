import React, { useState } from 'react';
import OrderDetailsModal from './OrderDetailsModal';

const OrderTable = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-4 border-none uppercase text-xs">ID</th>
            <th className="py-2 px-4 border-none uppercase text-xs">Table</th>
            <th className="py-2 px-4 border-none uppercase text-xs">Customer</th>
            <th className="py-2 px-4 border-none uppercase text-xs">Status</th>
            <th className="py-2 px-4 border-none uppercase text-xs">Date</th>
            <th className="py-2 px-4 border-none uppercase text-xs">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order,index) => (
            <tr key={order.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4 border-none text-center">{order.id}</td>
              <td className="py-2 px-4 border-none text-center">{order.table}</td>
              <td className="py-2 px-4 border-none text-center">{order.customer}</td>
              <td className="py-2 px-4 border-none text-center">{order.status}</td>
              <td className="py-2 px-4 border-none text-center">{order.date}</td>
              <td className="py-2 px-4 border-none text-center">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      )}
    </div>
  );
};

export default OrderTable;
