import React, { useState } from 'react';

const DishForm = ({ initialDish, onSave, onCancel }) => {
  const [dish, setDish] = useState(
    initialDish || { name: '', price: '', available: true }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDish({
      ...dish,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(dish);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Dish Name:</label>
          <input
            type="text"
            name="name"
            value={dish.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={dish.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className=" text-gray-700 flex items-center">
            <input
              type="checkbox"
              name="available"
              checked={dish.available}
              onChange={handleChange}
              className="mr-2"
            />
            Available
          </label>
        </div>
        <div className="space-x-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DishForm;
