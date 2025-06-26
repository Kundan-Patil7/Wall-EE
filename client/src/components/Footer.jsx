import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/image.svg';

const Footer = () => {
  return (<footer className="bg-white text-black py-8 px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Wallpaper Website Logo" className="h-12" />
            <h2 className="text-2xl  caveat-brush-regular  font-bold">Wall-EE</h2>
          </div>
          <p className="text-sm text-gray-700 mt-4 bg-blue-300 md:mt-0">
            Bring your screens to life with stunning wallpapers. 
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/category/anime" className="hover:underline">Anime</Link></li>
              <li><Link to="/category/nature" className="hover:underline">Nature</Link></li>
              <li><Link to="/category/space" className="hover:underline">Space</Link></li>
              <li><Link to="/category/superheroes" className="hover:underline">Superheroes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:underline">About Us</Link></li>
              <li><Link to="/" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/" className="hover:underline">FAQ</Link></li>
              <li><Link to="/" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:underline">Trending</Link></li>
              <li><Link to="/" className="hover:underline">New Arrivals</Link></li>
              <li><Link to="/" className="hover:underline">Upload Your Wallpaper</Link></li>
              <li><Link to="/" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <FaFacebookF className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                  <FaYoutube className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-700">&copy; 2025 Wall-EE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
