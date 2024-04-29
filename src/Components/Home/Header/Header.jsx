import React from 'react'
import { IoSettings } from "react-icons/io5";

const Header = () => {
    return (
        <div className='header text-center text-white space-y-5 p-5 md:p-20'>
            <div className='flex justify-center'>
                <IoSettings className='text-white text-5xl md:text-8xl bg-red-500 p-3' />
            </div>
            <p className='text-lg md:text-2xl'> The Best Theme For Auto Shops </p>
            <h2 className='text-4xl md:text-7xl font-bold'>Say Hello To <span className='text-red-500'>Car <br />Shop !</span></h2>
            <p className='pt-2 md:pt-4 text-sm md:text-base'> Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, <br /> Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres. </p>
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <button className='px-4 md:px-7 py-2 md:py-2.5 text-sm bg-red-500 font-bold relative group hover:text-black overflow-hidden'>
                    <span className='z-10 relative '>CHECK IT NOW</span>
                    <div className='bg-white absolute top-0 left-0 w-full h-0 group-hover:h-full duration-500 transform skew-y-3'></div>
                </button>
                <button className='px-4 md:px-7 py-2 md:py-2.5 text-sm text-black hover:text-white bg-white  font-bold relative group overflow-hidden'>
                    <span className='z-10 relative '>PURCHASE NOW</span>
                    <div className='bg-red-500 absolute top-0 left-0 w-full h-0 group-hover:h-full duration-500 transform skew-y-3'></div>
                </button>
            </div>
        </div>
    )
}

export default Header;
