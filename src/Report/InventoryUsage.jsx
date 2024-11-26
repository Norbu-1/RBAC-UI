import React from 'react';

const InventoryUsage = () => {
  const usageData = [
    { id: 1, item: 'Tomatoes', consumed: 150, wasted: 20 },
    { id: 2, item: 'Cheese', consumed: 50, wasted: 5 },
    { id: 3, item: 'Onions', consumed: 100, wasted: 10 },
    { id: 4, item: 'Chicken Breast', consumed: 200, wasted: 15 },
    { id: 5, item: 'Milk', consumed: 120, wasted: 8 },
    { id: 6, item: 'Bread', consumed: 80, wasted: 12 },
    { id: 7, item: 'Eggs', consumed: 300, wasted: 25 },
    { id: 8, item: 'Rice', consumed: 180, wasted: 10 },
    { id: 9, item: 'Butter', consumed: 60, wasted: 5 },
    { id: 10, item: 'Potatoes', consumed: 220, wasted: 30 },
    { id: 11, item: 'Pasta', consumed: 90, wasted: 7 },
    { id: 12, item: 'Lettuce', consumed: 70, wasted: 15 }
  ]
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Inventory Usage</h3>
      <hr mb-4/>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white text-xs uppercase">
            <tr>
              <th className="px-4 py-2 border">Item</th>
              <th className="px-4 py-2 border">Consumed</th>
              <th className="px-4 py-2 border">Wasted</th>
            </tr>
          </thead>
          <tbody>
            {usageData.map((item,index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2 border text-center">{item.item}</td>
                <td className="px-4 py-2 border text-center">{item.consumed} kg</td>
                <td className="px-4 py-2 border text-center">{item.wasted} kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryUsage;
