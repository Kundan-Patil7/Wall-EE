import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaFileAlt, FaCog } from 'react-icons/fa';
import admin from "../../assets/admin.gif"
const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg fixed flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-300 text-center">
        <h2 className="text-2xl font-bold text-indigo-600 tracking-wide">
          Admin Panel
        </h2>

        <img src={admin} className='h-40 w-50' alt="" />
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex flex-col mt-6 space-y-2 px-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-all ${
              isActive
                ? 'bg-indigo-100 text-indigo-600 font-semibold'
                : 'hover:bg-indigo-50 hover:text-indigo-500 text-gray-700'
            }`
          }
        >
          <FaTachometerAlt className="text-lg mr-3" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-all ${
              isActive
                ? 'bg-indigo-100 text-indigo-600 font-semibold'
                : 'hover:bg-indigo-50 hover:text-indigo-500 text-gray-700'
            }`
          }
        >
          <FaUsers className="text-lg mr-3" />
          <span>Manage Users</span>
        </NavLink>
        <NavLink
          to="/admin/posts"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-all ${
              isActive
                ? 'bg-indigo-100 text-indigo-600 font-semibold'
                : 'hover:bg-indigo-50 hover:text-indigo-500 text-gray-700'
            }`
          }
        >
          <FaFileAlt className="text-lg mr-3" />
          <span>Manage Posts</span>
        </NavLink>
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-all ${
              isActive
                ? 'bg-indigo-100 text-indigo-600 font-semibold'
                : 'hover:bg-indigo-50 hover:text-indigo-500 text-gray-700'
            }`
          }
        >
          <FaCog className="text-lg mr-3" />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-gray-300 text-center">
        <p className="text-sm text-gray-400">© 2025 Admin Panel</p>
      </div>
    </div>
  );
};

export default Sidebar;
