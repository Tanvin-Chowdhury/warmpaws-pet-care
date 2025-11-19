import React from 'react';
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router';

const Header = () => {
    return (
         <div className="navbar bg-background shadow-sm">
            <div className='mx-auto w-[1470px] flex items-center justify-between'>

                {/* Left side */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" fill="none" 
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
                            className="menu menu-sm dropdown-content bg-card rounded-2xl z-10 mt-3 w-52 p-2 shadow winter-card"
                        >
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>My Profile</a></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className='flex cursor-pointer'>
                        <img src={logo} alt="logo" width={50} height={50} className='mr-2'/>
                        <a className="flex flex-col">
                            <p className="text-2xl font-bold text-foreground">WarmPaws</p>
                            <span className="text-[12px] font-light text-muted-foreground">
                                Pet Care in Winter
                            </span>
                        </a>
                    </div>
                </div>

                {/* Center items (Desktop) */}
                <div className="nav navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-foreground gap-4">
                        <NavLink to='/'><li><a className='hover:bg-[#b0c9ed] px-5 rounded-3xl'>Home</a></li></NavLink>
                        <NavLink to='/services'><li><a className='hover:bg-[#b0c9ed] px-5 rounded-3xl'>Services</a></li></NavLink>
                        <NavLink to='/profile'><li><a className='hover:bg-[#b0c9ed] px-5 rounded-3xl'>My Profile</a></li></NavLink>
                    </ul>
                </div>

                {/* Right Buttons */}
                <div className="menubar navbar-end gap-2">
                    <button className="cursor-pointer rounded-3xl px-5 py-2 hover:[background-image:linear-gradient(to_right,#FFBFA933,#FFBFA94D)] text-foreground hover:bg-muted transition">
                        Login
                    </button>

                    <button className="cursor-pointer text-white rounded-3xl px-5 p-2 bg-gradient-to-r from-[#4A6FA5] to-[#4A6FA5]/80 hover:from-[#4A6FA5]/90 hover:to-[#4A6FA5]/70 shadow-md hover:shadow-lg transition-all">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;