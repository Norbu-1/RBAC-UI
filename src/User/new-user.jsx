import React, { useState } from 'react';
import axios from 'axios';

const AddNewUser = () => {
  const [user, setUser] = useState({
    name: '',
    role: '',
    email: '',
    status: '',
    lastLogin: '',
    image: '',
    bio: {
      age: '',
      phone: '',
      dateOfJoining: ''
    },
    address: {
      state: '',
      pincode: '',
      area: '',
      buildingHouse: ''
    },
    qualifications: [],
    skills: [],
    experience: [],
    languagesSpoken: [],
    hobbies: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('bio.') || name.startsWith('address.')) {
      const [parentKey, childKey] = name.split('.');
      setUser({
        ...user,
        [parentKey]: {
          ...user[parentKey],
          [childKey]: value
        }
      });
    } else {
      setUser({
        ...user,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/users', user)
      .then(response => {
        newUserInfo(response.data);
        setUser({
          name: '',
          role: '',
          email: '',
          status: '',
          lastLogin: '',
          image: '',
          bio: {
            age: '',
            phone: '',
            dateOfJoining: ''
          },
          address: {
            state: '',
            pincode: '',
            area: '',
            buildingHouse: ''
          },
          qualifications: [],
          skills: [],
          experience: [],
          languagesSpoken: [],
          hobbies: []
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="p-4 border rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role:</label>
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status:</label>
          <input
            type="text"
            name="status"
            value={user.status}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Login:</label>
          <input
            type="datetime-local"
            name="lastLogin"
            value={user.lastLogin}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="url"
            name="image"
            value={user.image}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bio - Age:</label>
          <input
            type="number"
            name="bio.age"
            value={user.bio.age}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bio - Phone:</label>
          <input
            type="tel"
            name="bio.phone"
            value={user.bio.phone}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bio - Date of Joining:</label>
          <input
            type="date"
            name="bio.dateOfJoining"
            value={user.bio.dateOfJoining}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address - State:</label>
          <input
            type="text"
            name="address.state"
            value={user.address.state}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address - Pincode:</label>
          <input
            type="text"
            name="address.pincode"
            value={user.address.pincode}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address - Area:</label>
          <input
            type="text"
            name="address.area"
            value={user.address.area}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address - Building/House:</label>
          <input
            type="text"
            name="address.buildingHouse"
            value={user.address.buildingHouse}
            onChange={handleChange}
            className="border rounded-md w-full p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;
