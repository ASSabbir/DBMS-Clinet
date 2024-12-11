
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Root = () => {
    return (
        <div className='font-inter-tight text-zinc-700'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;