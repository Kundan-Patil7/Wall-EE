import React from 'react';

const Nav = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logged out');
  };

  return (
    <nav className="w-full  text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Admin Panel Name */}
        <div className="text-lg font-bold">
          <span className="text-indigo-500">Admin</span> Panel
        </div>

        {/* Right: Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition-all"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Nav;
