
import React from 'react';

const FilterOrders = ({ setFilter }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select name="status" onChange={handleInputChange} className="p-2 border rounded">
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        type="number"
        name="table"
        placeholder="Table Number"
        onChange={handleInputChange}
        className="p-2 border rounded"
      />

      <input
        type="date"
        name="date"
        onChange={handleInputChange}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default FilterOrders;
