import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
const OurTeam = () => {
    return (
        <>
            <div className='bg-gray-100 p-8 md:p-20 space-y-1'>
                <h5 className='text-red-500 text-sm tracking-widest text-center'>CREATIVES</h5>
                <h1 className='font-bold text-3xl text-center'>OUR TEAM</h1>
                <div className='flex flex-col xl:flex-row md:justify-evenly px-4 md:px-24'>
                    <p className='text-base text-center md:text-left'>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages,  Automobile Mechanicals, Mechanic <br /> Workshops, Auto Painting, Auto Centres.</p>
                    <button className='px-4 md:px-7 py-2 md:py-2.5 mt-2 text-sm bg-red-500 font-bold relative group hover:text-black overflow-hidden'>
                        <span className='z-10 relative '>CHECK ALL CREATIVES</span>
                        <div className='bg-white absolute top-0 left-0 w-full h-0 group-hover:h-full duration-500 transform skew-y-3'></div>
                    </button>
                </div>
                <div className='flex flex-wrap gap-20  justify-center pt-16'>
                    <div className='bg-white shadow-lg relative group '>
                        <img src="./img/1 (14).jpg" alt="" />
                        <div className='bg-black absolute opacity-0 hover:opacity-70 top-0 left-0 w-full h-0 group-hover:h-[295px] transition-all duration-700'>
                            <p className='text-white hidden group-hover:block text-sm px-4 py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <div className='lg:flex gap-6 pt-12 opacity-0 group-hover:opacity-100 px-4 items-center py-3'>
                                <FaFacebook className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaGooglePlusG className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaTwitter className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaWifi className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                            </div>
                        </div>
                        <h1 className='text-lg font-bold px-2'>MAHMOUD BAGHAGHO</h1>
                        <h3 className='px-2 py-2 text-sm'>Art Director</h3>
                    </div>
                    <div className='bg-white shadow-lg relative  group '>
                        <img src="./img/2 (10).jpg" alt="" />
                        <div className='bg-black opacity-0 hover:opacity-70 absolute top-0 left-0 w-full h-0 group-hover:h-[295px] transition-all duration-700'>
                            <p className='text-white hidden group-hover:block  text-sm px-4 py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <div className='lg:flex gap-6 pt-12 opacity-0 group-hover:opacity-100 px-4 items-center py-3'>
                                <FaFacebook className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaGooglePlusG className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaTwitter className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaWifi className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                            </div>
                        </div>
                        <h1 className='text-lg font-bold px-2'>AHMED ABD - ALHALEEM</h1>
                        <h3 className='px-2 py-2 text-sm'>Branding</h3>
                    </div>
                    <div className='bg-white shadow-lg relative  group '>
                        <img src="./img/3 (11).jpg" alt="" />
                        <div className='bg-black opacity-0 hover:opacity-70 absolute top-0 left-0 w-full h-0 group-hover:h-[295px] transition-all duration-700'>
                            <p className='text-white hidden group-hover:block  text-sm px-4 py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <div className='lg:flex gap-6 pt-12 opacity-0 group-hover:opacity-100 px-4 items-center py-3'>
                                <FaFacebook className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaGooglePlusG className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaTwitter className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaWifi className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                            </div>
                        </div>
                        <h1 className='text-lg font-bold px-2'>MOSTAFA AMIN</h1>
                        <h3 className='px-2 py-2 text-sm'>Graphic Design</h3>
                    </div>
                    <div className='bg-white shadow-lg relative  group '>
                        <img src="./img/4 (6).jpg" alt="" />
                        <div className='bg-black opacity-0 hover:opacity-70 absolute top-0 left-0 w-full h-0 group-hover:h-[295px] transition-all duration-700'>
                            <p className='text-white hidden group-hover:block  text-sm px-4 py-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <div className='lg:flex gap-6 pt-12 opacity-0 group-hover:opacity-100 px-4 items-center py-3'>
                                <FaFacebook className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaGooglePlusG className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaTwitter className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                                <FaWifi className='bg-red-500 p-1.5 text-white rounded-md text-3xl' />
                            </div>
                        </div>
                        <h1 className='text-lg font-bold px-2'>AHMED HASSAN</h1>
                        <h3 className='px-2 py-2 text-sm'>Web Developing</h3>
                    </div>
                </div>
            </div>
            <div className='bg-white p-4 px-4 lg:px-60 xl:px-96 py-6 lg:py-12 xl:py-20'></div>
        </>
    )
}

export default OurTeam
