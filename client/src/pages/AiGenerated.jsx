import React, { useState } from 'react';
import Title from '../components/Title';

const AiGenerated = () => {
  const [prompt, setPrompt] = useState(''); // To store user input
  const [imageUrl, setImageUrl] = useState(''); // To store the generated image URL

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert('Please enter a valid prompt!');
      return;
    }

    try {
      // Simulated API response
      const data = { imageUrl: 'https://via.placeholder.com/400x400?text=AI+Generated+Image' };
      setImageUrl(data.imageUrl); // Update the image URL
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-gray-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, rgba(255, 255, 255, 0) 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Title Section */}
      <div className="absolute top-8">
        <Title title="AI Generated" subtitle="Create your own wallpaper with AI" />
      </div>

      {/* Prompt Input Section */}
      <div className="w-full max-w-lg p-8 bg-white/80 backdrop-blur-none rounded-lg shadow-lg z-10">
        <label className="block text-lg font-medium text-gray-700" htmlFor="prompt">
          Enter your prompt:
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the wallpaper you'd like to create..."
          rows={3}
          className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={handleGenerate}
            className="px-6 py-2 text-white font-medium rounded-md shadow transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l"
            style={{
              animation: 'gradientButton 3s ease infinite',
              backgroundSize: '200% 200%',
            }}
          >
            Generate Wallpaper
          </button>
        </div>
      </div>

      {/* Display Generated Image */}
      {imageUrl && (
        <div className="mt-12 text-center">
          <img src={imageUrl} alt="AI Generated" className="w-full max-w-md mx-auto rounded-md shadow-lg" />
          <p className="mt-4 text-sm text-gray-700">Your AI-generated wallpaper is ready!</p>
        </div>
      )}

      {/* Button Gradient Animation */}
      <style>
        {`
          @keyframes gradientButton {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default AiGenerated;
