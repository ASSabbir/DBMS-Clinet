import PropTypes from 'prop-types';
import { CiCircleList, CiLocationOn } from "react-icons/ci";
import { PiMoneyThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const Card = ({ job }) => {
    const { category_name, salary, industry, image, } = job
    
    const navigate = useNavigate()
    const handelnevigate = () => {
        navigate(`/categoris/${job.id}`)
    }
    return (
        <div onClick={handelnevigate} className='border-[1px] rounded-lg p-5'>
            <div>
                <h1 className='text-2xl font-bold mb-2'>{job.job_title}</h1>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1'>
                        <CiCircleList />
                        {category_name}
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiLocationOn />
                        {job.location}
                    </div>

                    <div className='flex items-center gap-1'>
                        <PiMoneyThin />
                        {salary}
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    job: PropTypes.object
}
export default Card;