import React, { useState } from 'react';

const AddStockForm = ({ addStock, closeStock }) => {
  const [newItem, setNewItem] = useState({ item: '', quantity: '', threshold: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.item || !newItem.quantity || !newItem.threshold) return;
    addStock(newItem);
    closeStock();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Add New Stock</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Item Name</label>
          <input
            type="text"
            name="item"
            value={newItem.item}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter item name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Threshold</label>
          <input
            type="number"
            name="threshold"
            value={newItem.threshold}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter threshold"
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Add Stock
          </button>
          <button
            type="button"
            onClick={closeStock}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStockForm;
