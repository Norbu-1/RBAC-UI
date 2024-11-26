import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './user-profile';
import AddNewUser from './new-user';

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPopup,setPopup]=useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleUserInfo = (user) => {
   
    setSelectedUser(user);
  };

  const handleUpdate = (updatedUser) => {
    axios.put(`http://localhost:5000/users/${updatedUser.id}`, updatedUser)
      .then(response => {
        setUsers(users.map(user => user.id === updatedUser.id ? response.data : user));
        setSelectedUser(response.data);
      })
      .catch(error => console.error(error));
  };

  const handleDelete = (userId,e) => {
    setUserToDelete(userId);
     setPopup(e);
   
  };
  const confirmDelete=()=>{
    axios.delete(`http://localhost:5000/users/${userToDelete}`)
    .then(() => {
      setUsers(users.filter(user => user.id !== userToDelete));
      setSelectedUser(null);
      setPopup(false);
    })
    .catch(error => console.error(error));
  }
 const cancelDelete=()=>{
  setPopup(false);
 }
  return (<>
    {selectedUser ? (<UserProfile info={selectedUser} onSave={handleUpdate} back={setSelectedUser}/>):
    <div className="container mx-auto p-4 rounded border bg-blue-50">

      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800">Users Overview </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
       
         >New Application</button>
      </div>
      <p className='pb-4 text-gray-500'>List of the staffs with their detailed information.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white text-xl">
              <th className="px-4 py-2 text-left text-xs font-medium  uppercase tracking-wider">Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium  uppercase tracking-wider">Role</th>
              <th className="px-4 py-2 text-left text-xs font-medium  uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium  uppercase tracking-wider">Last Login</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <React.Fragment key={index} >
                <tr className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <div>
                        <img src={user.image} alt="image" className="w-10 h-10 bg-gray-300 rounded-full mr-8 md:mr-4" />
                      </div>
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{user.role}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{new Date(user.lastLogin).toLocaleString()}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-right">
                    <button className="text-blue-500" onClick={() => handleUserInfo(user)}>Edit</button>
                    <button className="text-red-500 ml-2" onClick={() => handleDelete(user.id,true)}>Delete</button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this user?</p>
            <div className="mt-6 flex justify-between">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>}
    </>);
};

export default UserManage;
