import React from 'react';

const HomeBrand = () => {
    return (
        <div className='bg-gray-100 p-8 md:p-20 space-y-1'>
            <h5 className='text-red-500 text-sm tracking-widest text-center'>WE GET</h5>
            <h1 className='font-bold text-3xl text-center'>NEW ITEMS</h1>
            <div className='flex flex-col xl:flex-row md:justify-evenly px-4 md:px-24'>
                <p className='text-base text-center md:text-left'>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages,  Automobile Mechanicals, Mechanic <br /> Workshops, Auto Painting, Auto Centres.</p>
                <button className='px-4 md:px-7 py-2 md:py-2.5 mt-2 text-sm bg-red-500 font-bold relative group hover:text-black overflow-hidden'>
                    <span className='z-10 relative '>CHECK ALL BRANDS</span>
                    <div className='bg-white absolute top-0 left-0 w-full h-0 group-hover:h-full duration-500 transform skew-y-3'></div>
                </button>
            </div>
            <div className='flex flex-wrap justify-center p-4'>
                <img className='bg-white px-10 py-8 border border-gray-200 m-2' src="./img/1 (1).png" alt="" />
                <img className='bg-white px-10 py-8 border border-gray-200 m-2' src="./img/2 (1).png" alt="" />
                <img className='bg-white px-10 py-8 border border-gray-200 m-2' src="./img/3 (1).png" alt="" />
                <img className='bg-white px-10 py-8 border border-gray-200 m-2' src="./img/4 (1).png" alt="" />
                <img className='bg-white px-10 py-8 border border-gray-200 m-2' src="./img/5 (1).png" alt="" />
                <img className='bg-white px-10 py-8 border border-gray-200 m-2' src="./img/6.png" alt="" />
            </div>
        </div>
    )
}

export default HomeBrand;
