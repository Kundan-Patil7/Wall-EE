import React from 'react';
import Title from '../components/Title';
import img from "../assets/me.jpeg";

const AboutUs = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Title Section */}
      <Title title="About Us" subtitle="Wallpaper Website" />

      {/* About Us Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mt-12 mx-auto max-w-5xl">
        {/* Image Section */}
        <div className="relative ">
          <img
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-indigo-500"
            src={img}
            alt="Avatar"
          />
          <div className="absolute bottom-4 right-4 bg-indigo-500 text-white text-sm py-1 px-3 rounded-full shadow-md">
            Full Stack Developer
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Kundan <span className="text-indigo-600">Patil</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a passionate developer focused on crafting innovative websites and applications, specializing in wallpapers and creative content. With a keen eye for detail, I aim to create visually stunning and user-friendly platforms.
          </p>

          {/* Contact Information */}
          <div className="mt-6 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information:</h3>
            <p className="flex items-center text-gray-700">
              <span className="material-icons-outlined text-indigo-500 mr-2">email</span>
              <span>kpatil.pale@gmail.com</span>
            </p>
            <p className="flex items-center text-gray-700">
              <span className="material-icons-outlined text-indigo-500 mr-2">phone</span>
              <span>+91 8805783614</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
