# 🏢 Restaurant Management System (RBAC Project) - **Restauro**

---

## 📜 Project Overview

**Restauro** is a comprehensive restaurant management system designed to streamline operations, enhance user experience, and simplify administrative tasks. It includes features for menu management, order tracking, inventory control, user role management, and reporting. This system leverages modern technologies to provide a robust, secure, and user-friendly interface for managing restaurant activities.

---

## 📚 Table of Contents

1. [🔧 Features](#features)
2. [🚀 Setup Instructions](#setup-instructions)
3. [🛠️ Technologies Used](#technologies-used)
4. [📖 Usage Guide](#usage-guide)

---

## 🔧 Features

### 🖥️ Modules

- **Dashboard:**  
  An overview of key metrics such as active orders, stock levels, and user activity.  
  Navigate seamlessly between different modules using the sidebar.
  
- **User Management:**  
  Add, update, and delete user accounts with role-based access.
  
- **Menu Management:**  
  Create, edit, and organize dishes with ease.

- **Order Management:**  
  Track orders and update their status in real time.

- **Inventory Management:**  
  Monitor and manage ingredient stock levels effectively.

- **Reports Management:**  
  Generate detailed reports on sales, inventory usage, and user activity.
  
### 🛠️ Role-Based Features  

 - 👨‍💼 **Admin:**  
    Access all modules: User Management, Menu Management, Order Management, Inventory Management, and Reports Management.  
    Assign and manage roles for different users.  

- 🧑‍🍳 **Manager:**  
    Oversee **Menu Management**, **Order Management**, and **Inventory Management**.  
    Generate and view reports for sales and inventory tracking.  

- 👩‍🍳 **Chef:**  
    Access **Menu Management** to check items and availability.  
    Use **Order Management** to track incoming orders and mark items as prepared.  
    Monitor ingredient availability in **Inventory Management**.

- 👨‍💼 **Waiter:**  
    Use **Order Management** to place and monitor customer orders.  

- 💰 **Cashier:**  
    Generate detailed reports on transactions using **Reports Management**.
    
- 🏠 **Dashboard:** Access to all.
  
### 🔐 Authentication & Security

- **Secure Login:**  
  Protected login screen with form validation.

- **Role-Based Access Control (RBAC):**  
  Restrict access based on user roles (Admin, Manager, Chef, Waiter, Cashier).

### 📱 Responsive Design

- Mobile-friendly and responsive UI.
- Sidebar navigation for easy access to different modules.

---

## 🚀 Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### 📥 Installation

1. **Clone the repository:**

   ```bash
   git https://github.com/Norbu-1/RBAC-UI.git
   cd rbac-interface
2. **Install dependencies:**

   ```bash
   npm install

3. **Start the development server:**

   ```bash
   node server.js
4. **Run the Code**

   ```bash
   npm run dev

---

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **State Management:** React Hooks  
- **Routing:** React Router  
- **Icons:** React Icons  

---

## 📖 Usage Guide

### 🔐 **Login:**  
Access the system by entering your assigned role and password. Different roles have unique access levels and permissions.
> **Note:** You can enter any password for now to simulate login for various roles.

### 📊 **Dashboard:**  
Navigate seamlessly between modules (Menu, Orders, Inventory) using the sidebar. The dashboard provides an overview tailored to the user's role.

### 👥 **User Roles:**  
Assign roles to control access to specific features. Each role has defined permissions:  
- **Admin:** Full access to all modules.  
- **Manager:** Manage menus, orders, inventory, and generate reports.  
- **Chef:** View and update orders, and monitor inventory.  
- **Waiter:** Place and track customer orders.  
- **Cashier:** Access transaction reports and handle payments. 

---
## Thankyou

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
