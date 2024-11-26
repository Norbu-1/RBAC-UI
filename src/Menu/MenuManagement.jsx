import React, { useState } from 'react';
import DishList from './DishList';
import DishForm from './DishForm';
const dishDetail=[
    {
      "id": 1,
      "name": "Margherita Pizza",
      "price": 8.99,
      "available": true
    },
    {
      "id": 2,
      "name": "Cheeseburger",
      "price": 6.49,
      "available": true
    },
    {
      "id": 3,
      "name": "Caesar Salad",
      "price": 5.99,
      "available": false
    },
    {
      "id": 4,
      "name": "Spaghetti Carbonara",
      "price": 10.99,
      "available": true
    },
    {
      "id": 5,
      "name": "Chicken Tikka Masala",
      "price": 12.99,
      "available": true
    },
    {
      "id": 6,
      "name": "Fish and Chips",
      "price": 9.49,
      "available": false
    },
    {
      "id": 7,
      "name": "Vegetable Stir Fry",
      "price": 7.99,
      "available": true
    },
    {
      "id": 8,
      "name": "Beef Tacos",
      "price": 8.49,
      "available": true
    },
    {
      "id": 9,
      "name": "Sushi Platter",
      "price": 15.99,
      "available": false
    },
    {
      "id": 10,
      "name": "Chocolate Lava Cake",
      "price": 6.99,
      "available": true
    }
  ]
  
const MenuManagement = () => {
  const [dishes, setDishes] = useState(dishDetail);
  const [editingDish, setEditingDish] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddDish = () => {
    setEditingDish(null);
    setIsFormVisible(true);
  };

  const handleEditDish = (dish) => {
    setEditingDish(dish);
    setIsFormVisible(true);
  };

  const handleDeleteDish = (id) => {
    setDishes(dishes.filter((dish) => dish.id !== id));
  };

  const handleSaveDish = (dish) => {
    if (editingDish) {
      setDishes(
        dishes.map((d) => (d.id === editingDish.id ? { ...dish, id: d.id } : d))
      );
    } else {
      setDishes([...dishes, { ...dish, id: Date.now() }]);
    }
    setIsFormVisible(false);
  };

  return (
    <div className="container mx-auto p-4 border rounded bg-blue-50 ">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Menu</h1>
      {isFormVisible ? (
        <DishForm
          initialDish={editingDish}
          onSave={handleSaveDish}
          onCancel={() => setIsFormVisible(false)}
        />
      ) : (
        <>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
            onClick={handleAddDish}
          >
            Add Dish
          </button>
          <DishList
            dishes={dishes}
            onEdit={handleEditDish}
            onDelete={handleDeleteDish}
          />
        </>
      )}
    </div>
  );
};

export default MenuManagement;
