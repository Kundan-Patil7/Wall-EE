import React, { useState } from 'react';

const ManageUsers = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Suspended' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', status: 'Active' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', status: 'Active' },
  ]);

  const [search, setSearch] = useState(''); // State for search query

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 min-h-screen" style={{ paddingLeft: '18rem' }}>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-indigo-400 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 border-t">
                <td className="px-6 py-4 text-gray-800 text-sm">{user.name}</td>
                <td className="px-6 py-4 text-gray-800 text-sm">{user.email}</td>
                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    user.status === 'Active' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {user.status}
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                      user.status === 'Active'
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    {user.status === 'Active' ? 'Suspend' : 'Activate'}
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
