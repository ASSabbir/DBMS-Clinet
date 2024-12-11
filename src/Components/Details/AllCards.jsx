import React from 'react';
import { Link } from 'react-router-dom';

const AllCards = ({ data }) => {

    const { category_name, job_title, description, key_responsibilities, skills_and_experience, expiration_date, location, hours_per_week, rate_per_hour, salary, skills, image } = data
    return (
        <div>
            <div className=" mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-5 px-[5vw]">
                {/* Top Section with Logo and Title */}
                <div className="flex items-center">
                    {/* Logo */}
                    <img
                        src={image}
                        alt="Company Logo"
                        className="h-14 w-14 rounded-lg border"
                    />
                    <div className="ml-4">
                        {/* Job Title */}
                        <h2 className="text-lg font-semibold text-gray-800">{job_title}</h2>
                        {/* Job Category */}
                        <p className="text-sm text-gray-500">{category_name}</p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="mt-4 space-y-2">
                    {/* Location */}
                    <div className="flex items-center text-sm text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4 mr-1 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13 12m0 0L8.343 16.657M13 12v7m0-7L8.343 7.343M13 12h7"
                            />
                        </svg>
                        {location}
                    </div>
                    {/* Hours Per Week */}
                    <div className="text-sm text-gray-600">
                        Hours: <span className="font-medium text-gray-800">{hours_per_week} hrs/week</span>
                    </div>
                    {/* Salary */}
                    <div className="text-sm text-gray-600">
                        Salary:{" "}
                        <span className="font-medium text-gray-800">
                            ${rate_per_hour}/hr - ${salary}
                        </span>
                    </div>
                    {/* Expiration Date */}
                    <div className="text-sm text-gray-600">
                        Expiration:{" "}
                        <span className="font-medium ">{expiration_date}</span>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                        {/* Job Type Tags */}
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                            Full Time
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                            Private
                        </span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                            Urgent
                        </span>
                    </div>
                    {/* Save Button */}
                    <Link to={`/quiz`}>
                        <button className='bg-secondary hover:bg-primary duration-200 px-5 py-2 font-inter rounded-lg text-white'>Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCards;