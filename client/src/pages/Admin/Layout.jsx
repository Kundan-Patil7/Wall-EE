import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Admin/Nav";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Nav />

        {/* Outlet for Nested Routes */}
        <div className="p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
