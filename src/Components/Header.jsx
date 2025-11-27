import React, { useContext } from 'react';
import logo from '../assets/logo.jpg';
import { NavLink } from 'react-router';
import { Link } from "react-router";
import { AuthContext } from '../Provider/AuthProvider';
import { CircleUserRound, User } from 'lucide-react';
import { toast } from 'react-toastify';
import Loading from '../Pages/Loading';

const Header = () => {
    const {user, logOut, loading} = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            toast.success("Successfully Logged Out")
        })
        .catch((error)=>{
            toast.error("Logout Failed", error);
        })
    }

    return (
         <div className="navbar bg-white shadow-sm fixed top-0 left-0 w-full z-50">
            <div className='mx-auto w-[1440px] flex items-center justify-between px-4 sm:px-6'>

                {/* Left side */}
                <div className="navbar-start flex items-center gap-4">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" fill="none" 
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2" 
                                    d="M4 6h16M4 12h8m-8 6h16" 
                                />
                            </svg>
                        </div>

                        {/* Mobile menu */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white rounded-2xl z-10 mt-3 w-48 sm:w-52 p-2 shadow winter-card"
                        >
                            <NavLink to='/' className='hover:bg-[#b0c9ed] px-5 py-2 rounded-3xl'>Home</NavLink>
                            <NavLink to='/services' className='hover:bg-[#b0c9ed] px-5 py-2 rounded-3xl'>Services</NavLink>
                            <NavLink to='/profile' className='hover:bg-[#b0c9ed] px-5 py-2 rounded-3xl'>My Profile</NavLink>
                        </ul>
                    </div>

                    {/* Logo */}
                    <NavLink to='/'>
                        <div className='flex cursor-pointer items-center'>
                            <img src={logo} alt="logo" className='w-10 h-10 sm:w-12 sm:h-12 mr-2'/>
                            <div className="flex flex-col">
                                <p className="text-lg sm:text-2xl font-bold text-[#1a202c]">WarmPaws</p>
                                <span className="text-[10px] sm:text-[12px] font-light text-[#64748b]">
                                    Pet Care in Winter
                                </span>
                            </div>
                        </div>
                    </NavLink>
                </div>

                {/* Center items (Desktop) */}
                <div className="nav navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-foreground gap-4">
                        <NavLink to='/' className='hover:bg-[#b0c9ed] px-5 py-2 rounded-3xl text-[16px] lg:text-[18px]'>Home</NavLink>
                        <NavLink to='/services' className='hover:bg-[#b0c9ed] px-5 py-2 rounded-3xl text-[16px] lg:text-[18px]'>Services</NavLink>
                        <NavLink to='/profile' className='hover:bg-[#b0c9ed] px-5 py-2 rounded-3xl text-[16px] lg:text-[18px]'>My Profile</NavLink>
                    </ul>
                </div>

                {/* Right Buttons */}
                <div className="menubar navbar-end gap-2 flex items-center">

                    {
                        user ?  
                        (
                            <>
                            <div className='cursor-pointer'>
                                <CircleUserRound/>
                            </div>
                            <button onClick={handleLogOut} className="cursor-pointer rounded-3xl px-3 py-1 sm:px-5 sm:py-1 hover:bg-[linear-gradient(to_bottom_right,#FFBFA9,rgba(255,191,169,0.8))]">LogOut</button>
                            </>
                        )
                        : (
                        <>
                        <Link to ='auth/login'
                        className="cursor-pointer rounded-3xl px-3 py-1 sm:px-5 sm:py-1 hover:bg-[linear-gradient(to_bottom_right,#FFBFA9,rgba(255,191,169,0.8))]">
                            Login
                        </Link>

                        <Link to ='auth/register'
                        className="cursor-pointer text-white rounded-3xl px-3 py-1 sm:px-5 sm:py-2 bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-md hover:shadow-lg transition-all">
                            Sign Up
                        </Link>
                        </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
