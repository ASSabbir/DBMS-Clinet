import { useContext, useEffect, useState } from 'react';
import './Banner.css'
import { AuthContext } from '../Providers/MainContex';
const Catagoris = () => {
    const data=useContext(AuthContext)
    const [catagoris, setCatagoris] = useState([])
    useEffect(() => {
        fetch('/catagoris.json')
            .then(res => res.json())
            .then(data => setCatagoris(data))
    }, [])
   
    return (
        <div className='min-h-screen border-b-[1px]'>
            <h1 className='text-center text-2xl lg:text-[2vw] font-semibold text-zinc-700 pt-10 md:pt-[4vw]'>Popular Job Categories</h1>
            <h1 className='text-center text-zinc-500 mt-[1vw]'>2020 jobs live - 293 added today.</h1>
            <div className='mt-10 md:mt-[5vw] text-zinc-600 grid sm:grid-cols-2 md:grid-cols-3 gap-[2vw] px-[4vw]'>
                {catagoris && catagoris.map(categori => <div className='flex border-2 gap-5 cursor-pointer categori-container p-5 rounded-xl' key={categori.id}>
                    <div className='w-16 img-div bg-zinc-200 rounded-xl p-2'>
                        <img src={categori.image_url} alt="" className='w-full image-cls' />
                    </div>
                    <div className=''>
                        <h1 className='lg:text-[1.2vw] font-semibold'>{categori.name}</h1>
                        <h1 className='text-sm text-zinc-500'>({categori.total_jobs} open positions)</h1>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Catagoris;