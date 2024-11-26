import React from 'react';

const OrderDetailsModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Order Details (ID: {order.id})</h2>
        <p className="grid grid-cols-2 gap-4"><strong >Customer:</strong> <span>{order.customer}</span></p>
        <p className="grid grid-cols-2 gap-4"><strong >Table:</strong> <span>{order.table}</span></p>
        <p className="grid grid-cols-2 gap-4"><strong >Status:</strong> <span>{order.status}</span></p>
        <p className="grid grid-cols-2 gap-4"><strong >Date:</strong> <span>{order.date}</span></p>
        <p className="grid grid-cols-2 gap-4"><strong >Items:</strong> <span>{order.items.join(', ')}</span></p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
