import React from 'react';

const Title = ({ title, subtitle }) => {
    return (
        <div className="text-center my-8">
            <h2 className="text-3xl caveat-brush-regular py-2 font-bold bg-gradient-to-r from-red-600 to-pink-500 text-transparent bg-clip-text sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {subtitle && (
                <h4 className="mt-4 text-lg font-medium text-gray-600 sm:text-xl md:text-2xl">
                    {subtitle}
                </h4>
            )}
            <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
    );
};

export default Title;
