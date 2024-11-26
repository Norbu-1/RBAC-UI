import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Sidebar = ({ role, logout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const menuItems = [
    { label: "Dashboard", path: "/", roles: ["Admin", "Manager", "Chef", "Waiter", "Cashier"] },
    { label: "User Management", path: "/users", roles: ["Admin"] },
    { label: "Menu Management", path: "/menu", roles: ["Admin", "Manager"] },
    { label: "Orders", path: "/orders", roles: ["Admin", "Manager", "Chef", "Waiter"] },
    { label: "Inventory", path: "/inventory", roles: ["Admin", "Manager", "Chef"] },
    { label: "Reports", path: "/reports", roles: ["Admin", "Manager", "Cashier"] },
  ];

  const handleLogout = () => {
    logout(false); 
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };

  return (
    <>
      <nav
        className={`md:my-4 border md:rounded md:w-[30%] max-auto fixed md:relative left-0 top-20 md:top-0 z-50 md:z-0 w-64 bg-blue-50 shadow-lg transition-transform transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center p-4">
          <p className="text-2xl font-bold text-gray-800">{role} Window</p>
          {/* Mobile close button */}
          <button
            className="md:hidden text-xl text-gray-700"
            onClick={toggleSidebar} 
          >
            &times;
          </button>
        </div>
        <hr className="mx-4 pb-6" />
        <ul>
          {menuItems
            .filter((item) => item.roles.includes(role)) 
            .map((item) => (
              <React.Fragment key={item.path}>
                <li>
                  <Link
                    to={item.path}
                    className="font-semibold py-2 px-4 flex justify-between items-center hover:bg-blue-200 hover:shadow-md transition-all duration-200 gap-2 text-gray-700"
                  >
                    {item.label}
                    <IoIosArrowForward />
                  </Link>
                </li>
                <hr className="mx-4" />
              </React.Fragment>
            ))}
        </ul>
        <div className="absolute bottom-4 left-4 right-4 px-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </nav>

      <button
        className="md:hidden fixed top-7 left-6 text-blue-500 px-2 rounded-l-none rounded z-50 text-3xl"
        onClick={toggleSidebar} 
      >
        <IoMenuSharp />
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden ${sidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar} 
      ></div>
    </>
  );
};

export default Sidebar;
