import { useEffect, useState } from "react";
import Banner from "./Banner";
import Catagoris from "./Catagoris";
import FeaturedJObs from "./FeaturedJObs";
import Marque from "./Marque";
import { Link } from "react-router-dom";


const Home = () => {


    return (
        <div >
            <Banner></Banner>
            <Marque></Marque>
            <Catagoris></Catagoris>
            <FeaturedJObs ></FeaturedJObs>
            <div className="w-full bg-gradient-to-r from-primary to-secondary text-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                    <p className="text-xl mb-8">
                        Have questions or need assistance? Reach out to us and we'll be happy to help.
                    </p>

                    {/* Contact Form */}
                    <div className="flex justify-center">
                        <div className="bg-white text-black p-8 rounded-lg shadow-xl w-full max-w-lg">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-primary mt-[2vw] text-white py-20">
                <div className="container mx-auto flex flex-col items-center text-center">
                    {/* Website Name */}
                    <h1 className="text-5xl font-bold mb-6">
                        Welcome to <span className="text-secondary">HireLink</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg mb-8 max-w-2xl">
                        Your one-stop destination to find the perfect job or hire the best talent.
                        Connect with employers or discover your next career opportunity with ease.
                    </p>

                    {/* Image Section */}


                    {/* Call to Action */}
                    <div>
                        <Link to="/alljobs" className="bg-secondary text-white py-3 px-8 rounded-md text-xl hover:bg-primary-dark transition duration-300">
                            Start Searching for Jobs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;