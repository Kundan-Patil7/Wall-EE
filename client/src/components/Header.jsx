import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from "../assets/image.svg";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              title="Home" 
              className="flex rounded md:pl-10 outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img 
                className="w-auto h-8" 
                src={img} 
                alt="Company Logo" 
              />
              <h2 className='px-3 text-2xl caveat-brush-regular font-bold text-red-500'>Wall-EE</h2>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)}
            >
              <span className="sr-only">Toggle menu</span>
              {expanded ? (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
             <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/categories" 
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink 
              to="/trending" 
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                }`
              }
            >
              Trending
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/ai-generated" 
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                }`
              }
            >
              AI-Generated
            </NavLink>
          </nav>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink 
              to="/signin" 
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                  isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                }`
              }
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Sign up
            </NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        {expanded && (
          <div className="pt-4 pb-6 md:hidden">
            <div className="flex flex-col space-y-6">
              <NavLink 
                to="/categories" 
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                  }`
                }
              >
                Categories
              </NavLink>
              <NavLink 
                to="/trending" 
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                  }`
                }
              >
                Trending
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink 
                to="/ai-generated" 
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                  }`
                }
              >
                AI-Generated
              </NavLink>
            </div>

            <div className="flex flex-col mt-8 space-y-4">
              <NavLink 
                to="/signin" 
                className={({ isActive }) =>
                  `text-base font-medium transition-all duration-200 hover:text-opacity-80 ${
                    isActive ? 'text-gray-900 border-b-2 border-red-500 pb-1' : 'text-gray-900'
                  }`
                }
              >
                Sign in
              </NavLink>
              <NavLink
                to="/signup"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
