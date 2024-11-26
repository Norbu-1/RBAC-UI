import React, { useState } from "react";
import OrderTable from "./OrderTable";
import FilterOrders from "./FilterOrders";

const OrderManagement = () => {
  const [filter, setFilter] = useState({ status: "", table: "", date: "" });

  // Mock data for orders
  const orders = [
    {
      id: 1,
      table: 5,
      status: "Pending",
      date: "2024-01-01",
      customer: "John Doe",
      items: ["Pizza", "Coke"],
    },
    {
      id: 2,
      table: 3,
      status: "In Progress",
      date: "2024-01-02",
      customer: "Jane Smith",
      items: ["Chicken Rice", "Chappati"],
    },
    {
      id: 3,
      table: 2,
      status: "Completed",
      date: "2024-01-01",
      customer: " Simran",
      items: ["Burger", "Fries", "Pepsi"],
    },
    {
      id: 4,
      table: 1,
      status: "Pending",
      date: "2024-01-03",
      customer: "Arjun",
      items: ["Pasta", "Garlic Bread", "Lemonade"],
    },
    {
      id: 5,
      table: 7,
      status: "In Progress",
      date: "2024-01-04",
      customer: "Neha",
      items: ["Butter Chicken", "Butter Roti", "Iced Tea"],
    },
    {
      id: 6,
      table: 4,
      status: "Completed",
      date: "2024-01-05",
      customer: "Raj",
      items: ["Salad", "Soup", "Water"],
    },
  ];

  // Apply filters
  const filteredOrders = orders.filter((order) => {
    return (
      (filter.status ? order.status === filter.status : true) &&
      (filter.table ? order.table.toString() === filter.table : true) &&
      (filter.date ? order.date === filter.date : true)
    );
  });

  return (
    <div className=" container mx-auto p-4 rounded border bg-blue-50">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Orders Overview</h1>
      <FilterOrders setFilter={setFilter} />
      <OrderTable orders={filteredOrders} />
    </div>
  );
};

export default OrderManagement;
