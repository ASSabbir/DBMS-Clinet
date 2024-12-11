import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiCalendar, CiCircleList, CiClock2, CiLocationOn, CiTimer } from "react-icons/ci";
import { PiCoinsThin, PiMoneyThin, PiSubtitlesThin } from 'react-icons/pi';
import { AuthContext } from '../Providers/MainContex';

const Details = () => {
    const { datas, loading } = useContext(AuthContext);
    const { id } = useParams(); // Destructure 'id' from URL params
    const [jobData, setJobData] = useState(null);

    console.log(datas)
    console.log(loading)
    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!jobData) {
        return <h1>Job not found</h1>; // Display a fallback message if jobData is null
    }

    // Destructure job details only when 'jobData' is available
    const { category_name, job_title, description, key_responsibilities, skills_and_experience, expiration_date, location, hours_per_week, rate_per_hour, salary, skills, image } = jobData;

    return (
        <div>
            <div className='flex justify-between bg-zinc-200 p-9'>
                <div className='flex gap-5 px-[4vw]'>
                    <img src={image} alt={job_title} className='w-40' />
                    <div>
                        <h1 className='text-4xl font-bold'>{job_title}</h1>
                        <div className='flex items-center gap-5 mt-5'>
                            <div className='flex items-center gap-2'>
                                <CiCircleList />
                                {category_name}
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiLocationOn />
                                {location}
                            </div>
                            <div className='flex items-center gap-1'>
                                <PiMoneyThin />
                                {salary}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-secondary p-5 rounded-lg text-white'>Apply For Job</button>
                </div>
            </div>
            <div className='px-[4vw] mt-12 flex gap-5 pb-5'>
                <div className='w-[70%] h-full space-y-3'>
                    <h1 className='text-2xl font-semibold'>Job Description</h1>
                    <p className='text-zinc-500'>{description}</p>
                    <h1 className='text-2xl font-semibold pt-7'>Key Responsibilities</h1>
                    <ul className='list-disc ml-5 space-y-3'>
                        {key_responsibilities.map((li, index) => <li key={index}>{li}</li>)}
                    </ul>
                    <h1 className='text-2xl font-semibold pt-7'>Skills & Experience</h1>
                    <p className='text-zinc-500'>{skills_and_experience}</p>
                    <h1 className='text-2xl font-semibold pt-7'>Skills</h1>
                    <ul className='list-disc ml-5 space-y-3'>
                        {skills.map((li, index) => <li key={index}>{li}</li>)}
                    </ul>
                </div>
                <div className='w-[30%] bg-zinc-100 rounded-xl'>
                    <h1 className='text-2xl font-semibold p-5'>Job Overview</h1>
                    <div className='px-5 space-y-6 mt-5'>
                        <div className='flex items-center gap-5'>
                            <CiCalendar className='text-3xl text-primary' />
                            <div>
                                <h1 className='font-semibold'>Date Posted:</h1>
                                <h1 className='text-gray-500'>Posted 1 hour ago</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <CiTimer className='text-3xl text-primary' />
                            <div>
                                <h1 className='font-semibold'>Expiration date:</h1>
                                <h1 className='text-gray-500'>{expiration_date}</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <CiLocationOn className='text-3xl text-primary' />
                            <div>
                                <h1 className='font-semibold'>Location:</h1>
                                <h1 className='text-gray-500'>{location}</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <PiSubtitlesThin className='text-3xl text-primary' />
                            <div>
                                <h1 className='font-semibold'>Job Title:</h1>
                                <h1 className='text-gray-500'>{job_title}</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <CiClock2 className='text-3xl text-primary' />
                            <div>
                                <h1 className='font-semibold'>Hours:</h1>
                                <h1 className='text-gray-500'>{hours_per_week} / week</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <PiCoinsThin className='text-3xl text-primary' />
                            <div>
                                <h1 className='font-semibold'>Rate:</h1>
                                <h1 className='text-gray-500'>{rate_per_hour} / hour</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
