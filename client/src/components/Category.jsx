import React, { useState } from 'react';
import anime from '../assets/anime.jpg';
import nature from '../assets/nature.jpg';
import animal from '../assets/animal.jpg';
import game from '../assets/game.jpg';
import space from '../assets/space.jpg';
import superhero from '../assets/Superhero.jpg';
import tvShow from '../assets/tvshow.jpg';
import sport from '../assets/sport.jpg';
import cars from '../assets/car.jpg';
import flowers from '../assets/flowes.jpg';




const Category = () => {
    const allCategories = [
        {
            image: anime,
            title: "Anime",
        },
        {
            image: nature,
            title: "Nature",
        },
        {
            image: animal,
            title: "Animals",
        },
        {
            image: game,
            title: "Games",
        },
        {
            image: space,
            title: "Space",
        },
        {
            image: superhero,
            title: "Superheroes",
        },
        {
            image: tvShow,
            title: "TV Shows",
        },
        {
            image: sport,
            title: "Sports",
        },
        {
            image: cars,
            title: "Cars",
        },
        {
            image: flowers,
            title: "Flowers",
        }
    ];

    const [visibleCategories, setVisibleCategories] = useState(allCategories.slice(0, 4));

    const handleShowMore = () => {
        setVisibleCategories(allCategories);
    };

    return (
        <div className="p-6">
            <div className="grid gap-6 md:px-30 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {visibleCategories.map((category, index) => (
                    <div key={index} className="relative group rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-48 object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-3xl font-bold text-white  bg-opacity-50 py-2 px-4 rounded-lg">
                                {category.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCategories.length < allCategories.length && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleShowMore}
                        className="px-6 py-2 text-white hover:bg-black rounded-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Category;
