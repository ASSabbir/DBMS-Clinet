import { useContext, useState } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useLocation } from "react-router-dom";
import Headroom from "react-headroom";
import { AuthContext } from "./Providers/MainContex";
import Swal from "sweetalert2";


gsap.registerPlugin(ScrollTrigger);
const Nav = () => {
    const location = useLocation()
    const { user, logout } = useContext(AuthContext)
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    // setActive(window.scrollY)
    // console.log(active)
    const navItems = <>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/alljobs'}><li>Jobs</li></Link>
        <Link to={'/about_us'}><li>About Us</li></Link>
        <Link to={'/addjobs'}><li>Add Job</li></Link>
        <Link to={'/users'}><li>Users</li></Link>
    </>
    const handelLogOut = () => {
        logout()
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: `Bye See You Again`
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Headroom>
            <div id="nav-COntainer" className={`w-full  ${location.pathname == '/' ? 'text-white  bg-primary ' : 'text-primary bg-white border-b-[2px]'} px-[4vw]  hidden md:flex justify-between items-center py-5 $  duration-200`}>
                <div className="flex items-center w-[50%] justify-between">
                    <div className="flex items-center h-full">
                        {/* <img className="w-[3vw]" src="/public/android-chrome-192x192.png" alt="" /> */}
                        <h1 className="text-[2vw] font-inter-tight font-mediu">Hire Link</h1>
                    </div>
                    <div className="list-none flex gap-[2.3vw] text-xl">
                        {navItems}
                    </div>
                </div>

                <div className="">
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className="avatar tooltip tooltip-left" data-tip={user.displayName}>
                                <div className="w-12 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                                
                                
                            </div>
                            <button onClick={handelLogOut} className=" underline underline-offset-4 cursor-pointer">Log Out</button>
                        </div>

                        :
                        <Link to={'/login'}><h1 className=" underline underline-offset-4 cursor-pointer">Login</h1></Link>
                }
            </div>

            </div>
        </Headroom>
    );
};

export default Nav; 