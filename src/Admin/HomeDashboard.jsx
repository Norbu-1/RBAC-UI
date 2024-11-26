import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManage from "../User/UserManagement.jsx";
import MenuManagement from "../Menu/MenuManagement.jsx";
import OrderManagement from "../Order/OrderManagement.jsx";
import InventoryManagement from "../Inventory/InventoryManagement.jsx";
import ReportsManagement from "../Report/ReportsManagement.jsx";
import MainDashboard from "../Dashboard/DashboardManagement.jsx";
import LoginModal from "./Login.jsx";
import { FaUtensils, FaChartBar, FaClipboardList } from "react-icons/fa";
const HomeDashboard = () => {
  const [logUser, setLogUser] = useState(null);
  const [onLogin, setLogin] = useState(false);

  const handleLogout = () => {
    setLogUser(null);
    setLogin(false);
  };

  return (
    <Router>
      <div className="w-full h-full pt-20">
        {!onLogin ? (
          <div className="bg-white min-h-screen">
            <div
              className="relative h-[500px] bg-cover bg-center"
              style={{ backgroundImage: "url(../../public/bg.jpg)" }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                <h1 className="text-5xl font-bold leading-tight">
                  Welcome to Restauro
                </h1>
                <p className="text-lg mt-4 mb-6">
                  Delicious food delivered to your table within a minutes.
                </p>
              </div>
            </div>

            <div className="m-6 bg-blue-50 rounded-lg border grid grid-cols-1 md:grid-cols-2 gap-10 p-8 shadow-lg">
              <div className="my-4">
                <LoginModal onClose={setLogin} logdata={setLogUser} />
              </div>
              <div className="border p-6 rounded-lg shadow-lg bg-white">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                  Welcome to Restauro Management System
                </h1>
                <p className="text-gray-700 mb-6">
                  Streamline your restaurant operations effortlessly. From
                  managing menus and tracking inventory to processing orders and
                  generating insightful reports, Restauro provides all the tools
                  you need to deliver exceptional service and drive business
                  growth.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <FaClipboardList className="text-blue-500 mr-2" />
                    Simplify inventory tracking
                  </li>
                  <li className="flex items-center">
                    <FaUtensils className="text-green-500 mr-2" />
                    Manage and customize your menus
                  </li>
                  <li className="flex items-center">
                    <FaChartBar className="text-red-500 mr-2" />
                    Generate detailed reports and insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex">
            <Sidebar role={logUser.role} logout={handleLogout} />
            <div className="w-full p-4">
              <Routes>
                <Route
                  path="/"
                  element={<MainDashboard userdata={logUser} />}
                />
                <Route path="/users" element={<UserManage />} />
                <Route path="/menu" element={<MenuManagement />} />
                <Route path="/orders" element={<OrderManagement />} />
                <Route path="/inventory" element={<InventoryManagement />} />
                <Route path="/reports" element={<ReportsManagement />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default HomeDashboard;
