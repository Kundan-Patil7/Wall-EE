import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Trending from "./pages/Trending";
import AboutUs from "./pages/AboutUs";
import AiGenerated from "./pages/AiGenerated";
import Categories from "./pages/Categories";
import Login from "./components/Login"; // Import Login Component
import { UserProvider } from "./context/UserContext"; // Import UserProvider
import Layout from "./pages/Admin/Layout";
import Dashboard from "./pages/Admin/Dashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManagePosts from "./pages/Admin/ManagePosts";
import Settings from "./pages/Admin/Settings";


function App() {
  const location = useLocation();

  // Check if the current path is an admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <UserProvider>
      <>
        {/* Show Header only if not an admin route */}
        {!isAdminRoute && <Header />}

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ai-generated" element={<AiGenerated />} />
          <Route path="/categories" element={<Categories />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="posts" element={<ManagePosts />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>

        {/* Show Footer only if not an admin route */}
        {!isAdminRoute && <Footer />}

        {/* Login Component */}
        <Login />
      </>
    </UserProvider>
  );
}

export default App;