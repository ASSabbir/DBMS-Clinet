import PropTypes from 'prop-types'; 
import Card from './Card';
import { useContext } from 'react';
import { AuthContext } from '../Providers/MainContex';


const FeaturedJObs = () => {
    const {datas}=useContext(AuthContext)
    
    
    return (
        <div className="min-h-screen px-[4vw]  ">
             <h1 className='text-center text-2xl lg:text-[2vw] font-semibold text-zinc-700 pt-10 md:pt-[4vw]'>Featured Jobs</h1>
             <h1 className='text-center text-zinc-500 mt-[1vw]'>Know your worth and find the job that qualify your life</h1>
             <div className='grid grid-cols-2 gap-3 mt-[8vw]'>
                {
                    datas.map((job,index)=> <Card key={index} job={job}></Card>)
                }
             </div>
        </div>
    );
};

export default FeaturedJObs;