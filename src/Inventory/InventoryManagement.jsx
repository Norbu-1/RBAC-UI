import React, { useState } from 'react';
import InventoryTable from './InventoryTable';
import AddStockForm from './AddStockForm';
let itemDetail=[
    { id: 1, item: 'Tomatoes', quantity: 20, threshold: 10 },
    { id: 2, item: 'Cheese', quantity: 5, threshold: 8 },
    { id: 3, item: 'Bread', quantity: 0, threshold: 5 },
    { id: 4, item: 'Milk', quantity: 12, threshold: 10 },
{ id: 5, item: 'Eggs', quantity: 30, threshold: 20 },
{ id: 6, item: 'Butter', quantity: 8, threshold: 5 },
{ id: 7, item: 'Rice', quantity: 25, threshold: 15 },
{ id: 8, item: 'Sugar', quantity: 18, threshold: 10 },
{ id: 9, item: 'Salt', quantity: 40, threshold: 20 },
{ id: 10, item: 'Pasta', quantity: 10, threshold: 5 },
{ id: 11, item: 'Coffee Beans', quantity: 7, threshold: 10 },
{ id: 12, item: 'Chicken Breast', quantity: 15, threshold: 10 },
{ id: 13, item: 'Potatoes', quantity: 35, threshold: 25 },

  ]
const InventoryManagement = () => {
  const [addStock, setAddStock] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [inventory, setInventory] = useState(itemDetail);

  const addNewStock = (newItem) => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
  };

  // Search filter
  const filteredInventory = inventory.filter((item) =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = inventory.length;
  const lowStockCount = inventory.filter((item) => item.quantity < item.threshold && item.quantity > 0).length;
  const outOfStockCount = inventory.filter((item) => item.quantity === 0).length;

  return (
    <div className="p-4 container mx-auto border rounded bg-blue-50">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Inventory Overview</h2>

      <div className="mb-4 flex flex-wrap justify-between text-sm md:text-lg">
        <div className='mb-4 flex flex-wrap gap-2 text-black'>
        <div className="bg-blue-200 p-3 rounded-md">
          <strong>Total items:</strong> {totalItems}
        </div>
        <div className="bg-yellow-200 p-3 rounded-md">
          <strong>Low in stock:</strong> {lowStockCount}
        </div>
        <div className="bg-red-200 p-3 rounded-md">
          <strong>Out of stock:</strong> {outOfStockCount}
        </div>
        </div>
        <button
        onClick={() => setAddStock(true)}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Add New Item
      </button>
      </div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 p-2 border rounded-md"
      />

      

      {/* Add Stock Form (Modal) */}
      {addStock && (
        <AddStockForm addStock={addNewStock} closeStock={() => setAddStock(false)} />
      )}

      {/* Inventory Table */}
      <InventoryTable inventory={filteredInventory} />
    </div>
  );
};

export default InventoryManagement;
