
import './Banner.css'
const Banner = () => {
    
    return (
        <div id='banner-container' className={`justify-center flex flex-col z-30  h-screen px-[4vw] `}>
            <div className="  sm:w-[60%] flex flex-col justify-center space-y-6 mb-32  ">
                <h1 className="md:text-[3.2vw] text-5xl font-medium md:leading-[4vw]">There Are <span className='text-secondary'>93,178</span> Postings Here
                    For you!</h1>
                <h1 className="sm:text-[1.2vw] text-gray-400">Find Jobs, Employment & Career Opportunities</h1>

            </div>
            <div className='flex flex-col sm:flex-row absolute w-[92vw]  bottom-[5vw]'>
                <div className=' sm:pr-[2.5vw] border-b-2 sm:border-b-0 pb-[2.5vw] sm:border-r-2'>
                    <h1 className='text-sm md:text-[1.2vw]'>FOR JOB SEEKERS</h1>

                    <button className='bg-white  text-gray-700 mt-5 px-[2.5vw] py-[0.5vw] rounded-full'>Find your next job</button>
                </div>
                <div className='sm:pl-[2.5vw] mt-[2vw] sm:mt-0'>
                    <h1 className='text-sm md:text-[1.2vw] uppercase '>FOR Bussiness</h1>

                    <div>
                        <button className='bg-primary mr-[2vw] bg-opacity-70 border-white text-white   mt-5 px-[2.5vw] py-[0.5vw] rounded-full'>Find your next hire</button>
                        <button className='bg-primary  bg-opacity-70 border-white  text-white   mt-5 px-[2.5vw] py-[0.5vw] rounded-full'>Explore consulting solutions</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;