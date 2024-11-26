import React from 'react';

const DishList = ({ dishes = [], onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 table-auto">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="text-left px-4 py-2 uppercase tracking-wider text-xs whitespace-nowrap">Dish Name</th>
            <th className="text-left px-4 py-2 uppercase tracking-wider text-xs whitespace-nowrap">Price</th>
            <th className="text-left px-4 py-2 uppercase tracking-wider text-xs whitespace-nowrap">Availability</th>
            <th className="text-left px-4 py-2 uppercase tracking-wider text-xs whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish, index) => (
            <tr
              key={dish.id}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="px-4 py-2 whitespace-nowrap">{dish.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">${dish.price}</td>
              <td className={`mx-4 my-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${dish.available === true ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} whitespace-nowrap`}>
                {dish.available ? 'Available' : 'Not Available'}
              </td>
              <td className="px-4 py-2 space-x-2 whitespace-nowrap">
                <button
                  className="text-blue-500"
                  onClick={() => onEdit(dish)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => onDelete(dish.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DishList;
