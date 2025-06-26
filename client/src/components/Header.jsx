import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from "../assets/image.svg";
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { user, setUser, setlogincard } = useContext(UserContext); // Access context
  const [expanded, setExpanded] = useState(false); // Mobile menu toggle
  const [showLogout, setShowLogout] = useState(false); // Logout button toggle

  const handleLogout = () => {
    setUser(null); // Log the user out
    setShowLogout(false); // Close the logout option
  };

  return (
    <header className="py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              title="Home"
              className="flex rounded md:pl-10 outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img className="w-auto h-8" src={img} alt="Company Logo" />
              <h2 className="px-3 text-2xl font-bold text-red-500">Wall-EE</h2>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)} // Toggle mobile menu
            >
              <span className="sr-only">Toggle menu</span>
              {expanded ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive
                    ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                    : 'text-gray-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive
                    ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                    : 'text-gray-900'
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/trending"
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive
                    ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                    : 'text-gray-900'
                }`
              }
            >
              Trending
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive
                    ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                    : 'text-gray-900'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/ai-generated"
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive
                    ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                    : 'text-gray-900'
                }`
              }
            >
              AI-Generated
            </NavLink>
          </nav>

          {/* User Section */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {user ? (
              <div className="relative">
                {/* Avatar */}
                <img
                  className="h-10 w-10 rounded-full cursor-pointer"
                  src="https://avatar.iran.liara.run/public"
                  alt="User Avatar"
                  onClick={() => setShowLogout(!showLogout)} // Toggle Logout
                />
                {showLogout && (
                  <button
                    className="absolute top-full right-0 mt-2 bg-white shadow-md border px-4 py-2 text-sm rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </div>
            ) : (
              <button
                className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
                onClick={() => setlogincard(true)} // Open Login modal
              >
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {expanded && (
          <div className="pt-4 pb-6 md:hidden">
            <div className="flex flex-col space-y-6">
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive
                      ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                      : 'text-gray-900'
                  }`
                }
              >
                Categories
              </NavLink>
              <NavLink
                to="/trending"
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive
                      ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                      : 'text-gray-900'
                  }`
                }
              >
                Trending
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive
                      ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                      : 'text-gray-900'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/ai-generated"
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive
                      ? 'text-gray-900 border-b-2 border-red-500 pb-1'
                      : 'text-gray-900'
                  }`
                }
              >
                AI-Generated
              </NavLink>
            </div>

            {/* Mobile User Section */}
            <div className="flex mt-8 space-x-4">
              {user ? (
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
                  onClick={() => setlogincard(true)} // Open Login modal
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
