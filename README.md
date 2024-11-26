# 🏢 Restaurant Management System (RBAC Project) - **Restauro**

---

## 📜 Project Overview

**Restauro** is a comprehensive restaurant management system designed to streamline operations, enhance user experience, and simplify administrative tasks. It includes features for menu management, order tracking, inventory control, user role management, and reporting. This system leverages modern technologies to provide a robust, secure, and user-friendly interface for managing day-to-day restaurant activities.

---

## 📚 Table of Contents

1. [🔧 Features](#features)
2. [🚀 Setup Instructions](#setup-instructions)
3. [🛠️ Technologies Used](#technologies-used)
4. [📖 Usage Guide](#usage-guide)

---

## 🔧 Features

### 🖥️ Admin Dashboard

- **User Management:**  
  Add, update, and delete user accounts with role-based access.
  
- **Menu Management:**  
  Create, edit, and organize dishes with ease.

- **Order Management:**  
  Track orders and update their status in real-time.

- **Inventory Management:**  
  Monitor and manage ingredient stock levels effectively.

- **Reports Management:**  
  Generate detailed reports on sales, inventory usage, and user activity.

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

The app will be available at http://localhost:5173.
---

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **State Management:** React Hooks  
- **Routing:** React Router  
- **Icons:** React Icons  

---

## 📖 Usage Guide

### 🔐 Login:  
Access the system using the admin credentials.

### 📊 Dashboard:  
Navigate between modules (Menu, Orders, Inventory) using the sidebar.

### 👥 User Roles:  
Assign roles to control access to specific features.

### 📋 Manage Menu:  
Add new dishes, edit existing ones, or remove outdated items.

### 📦 Monitor Orders:  
View active and completed orders, and update their status.

### 📦 Check Inventory:  
Ensure stock levels are sufficient for daily operations.

---
## Thankyou

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
