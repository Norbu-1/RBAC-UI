import React from 'react';

const InventoryTable = ({ inventory }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr className='bg-gray-800 text-white text-xs uppercase'>
            <th className="px-4 py-2 border">Item</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Threshold</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item,index) => (
            <tr key={item.id} className={`${item.quantity === 0 ? 'bg-red-100' : item.quantity < item.threshold ? 'bg-yellow-100' : 'bg-green-100'} `}>
              <td className="px-4 py-2 border text-center">{item.item}</td>
              <td className="px-4 py-2 border text-center">{item.quantity}</td>
              <td className="px-4 py-2 border text-center">{item.threshold}</td>
              <td className="px-4 py-2 border text-center">
                {item.quantity === 0 ? 'Out of Stock' : item.quantity < item.threshold ? 'Low in stock' : 'In Stock'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
