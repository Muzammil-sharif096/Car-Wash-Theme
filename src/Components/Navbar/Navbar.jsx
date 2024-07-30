import React, { useState } from 'react'
import { NavbarData } from '../../Data'
import { Link } from 'react-router-dom'
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <nav className='flex items-center justify-evenly p-4 bg-red-500 shadow-xl relative'>
            <img src="./img/logo-light (2).png" alt="" />
            <ul className='lg:flex hidden tracking-wider items-center text-sm font-semibold gap-12'>
                {NavbarData.map((ele, index) => {
                    const isActive = index === 0;
                    return (
                        <li className='relative group' key={index}>
                            <Link
                                to={ele.Link}
                                className={`group-hover:text-red-500 ${isActive ? 'text-red-500' : 'text-black'}`}
                            >
                                {ele.Li}
                            </Link>
                            {(isActive || !isActive) && (
                                <hr
                                    className={`border-b border-red-500 absolute left-0 right-0 top-0 transform -translate-y-1 group-hover:translate-y-[-5px] opacity-${isActive ? '100' : '0'} group-hover:opacity-100 transition-all duration-300`}
                                />
                            )}
                        </li>
                    );
                })}
                <div className='flex gap-6 text-base'>
                    <FaSearch />
                    <FaCartShopping />
                </div>
            </ul>
            <button onClick={() => setShowNavbar(true)} className='lg:hidden md:block'>
                <FaBars className='text-2xl' />
            </button>
            {
                showNavbar && (
                    <div className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 z-50`}>
                        <div className='flex justify-end p-4'>
                            <button className='text-white text-2xl cursor-pointer' onClick={() => setShowNavbar(false)}><FaTimes /></button>
                        </div>
                        <div className='bg-black opacity-70 mt-4 p-2'>
                            <ul className='text-white flex flex-col items-start px-12 text-base font-semibold text-center'>
                                {
                                    NavbarData.map((ele) => {
                                        return (
                                            <li className='py-2 tracking-wider'>
                                                <Link
                                                    to={ele.Link}
                                                >
                                                    {ele.Li}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;
