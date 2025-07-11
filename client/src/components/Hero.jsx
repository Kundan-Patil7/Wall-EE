import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <section className="pt-12 bg-gray-50 sm:pt-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="px-6 text-lg caveat-brush-regular text-gray-600 font-inter">
                        Discover Stunning Wallpapers for Every Mood
                    </h1>
                    <p className="mt-5   text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight  font-pj">
                        Transform Your Screen with
                        <span className="relative inline-flex sm:inline">
                            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                            <span className="relative caveat-brush-regular "> Breathtaking Wallpapers </span>
                        </span>
                    </p>

                    <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                        <Link
                            to="/browse"
                            className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Browse Wallpapers
                        </Link>

                        <Link
                            to="/tutorials"
                            className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                            role="button"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Watch Tutorials
                        </Link>
                    </div>

                    <p className="mt-8 text-base text-gray-500 font-inter">
                        Unlimited downloads · No registration required
                    </p>
                </div>
            </div>

            {/* <div className="pb-12 bg-white">
                <div className="relative">
                    <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                    <div className="relative mx-auto">
                        <div className="lg:max-w-6xl lg:mx-auto">
                            <img
                                className="transform scale-110"
                                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Hero;
