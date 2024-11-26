import React from 'react';

const StaffPerformance = () => {
  const staffData = [
    { id: 1, name: 'Alice Johnson', attendance: '92%', productivity: '88%' },
    { id: 2, name: 'Michael Smith', attendance: '97%', productivity: '93%' },
    { id: 3, name: 'Sanjeev Kapoor', attendance: '90%', productivity: '86%' },
    { id: 4, name: 'Liam Davis', attendance: '94%', productivity: '89%' },
    { id: 5, name: 'Emma Wilson', attendance: '96%', productivity: '91%' },
    { id: 6, name: 'Oliver Martinez', attendance: '95%', productivity: '87%' }
  ]
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Staff Performance</h3>
      <hr  className='mb-4'/>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-800 text-white text-xs">
            <tr>
              <th className="px-4 py-2 border uppercase ">Name</th>
              <th className="px-4 py-2 border uppercase">Attendance</th>
              <th className="px-4 py-2 border uppercase">Productivity</th>
            </tr>
          </thead>
          <tbody>
            {staffData.map((staff,index) => (
              <tr key={staff.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="px-4 py-2 border text-center">{staff.name}</td>
                <td className="px-4 py-2 border text-center">{staff.attendance}</td>
                <td className="px-4 py-2 border text-center">{staff.productivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffPerformance;
