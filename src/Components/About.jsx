import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">About Us</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">
                        Welcome to <span className='font-bold text-primary'>HireLink!</span> We're dedicated to connecting people with the right opportunities, empowering individuals and businesses alike.
                    </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Our Mission</h3>
                        <p className="mt-3 text-lg text-gray-600">
                            Our mission is to simplify the job-hunting process by bridging the gap between skilled individuals and employers. We strive to make job searching
                            easy, accessible, and tailored to individual needs.
                        </p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">Seamless Job Matching</h4>
                                    <p className="mt-2 text-gray-600">
                                        Our advanced algorithms and tools ensure that job seekers find opportunities that perfectly match their skills and preferences.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">Opportunities for Everyone</h4>
                                    <p className="mt-2 text-gray-600">
                                        From freelancers and part-timers to full-time professionals, we provide diverse job categories to cater to every individual.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-gray-900">Empowering Businesses</h4>
                                    <p className="mt-2 text-gray-600">
                                        We empower companies to find the best talent quickly and effectively, ensuring a smoother hiring process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="/aleksandra-sapozhnikova-Qxq36KUnhuQ-unsplash.jpg" alt="About us image" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Why Choose Us</h3>
                            <p className="mt-3 text-lg text-gray-600">
                                We focus on providing a user-friendly platform with innovative features like video resumes and smart job filters, ensuring an exceptional
                                experience for both job seekers and employers.
                            </p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-gray-900">Innovative Features</h4>
                                        <p className="mt-2 text-gray-600">
                                            With tools like video resumes, we help job seekers showcase their personality and skills beyond traditional CVs.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-gray-900">Comprehensive Support</h4>
                                        <p className="mt-2 text-gray-600">
                                            Our team is dedicated to supporting you every step of the way, ensuring that you achieve your goals efficiently.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-gray-900">Commitment to Excellence</h4>
                                        <p className="mt-2 text-gray-600">
                                            We continually strive to improve our platform, making it the go-to solution for all your job search and hiring needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg" alt="Why choose us" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;