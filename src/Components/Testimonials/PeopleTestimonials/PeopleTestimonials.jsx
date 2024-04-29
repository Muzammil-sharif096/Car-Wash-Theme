import React from 'react';

const PeopleTestimonials = () => {
    return (
        <>
            <div className='bg-gray-100 p-8 md:p-20 space-y-1'>
                <h5 className='text-red-500 text-sm tracking-widest text-center'>PEOPLE SAY</h5>
                <h1 className='font-bold text-3xl text-center'>TESTIMONIALS</h1>
                <div className='flex flex-col xl:flex-row md:justify-evenly px-4 md:px-24'>
                    <p className='text-base text-center md:text-left'>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages,  Automobile Mechanicals, Mechanic <br /> Workshops, Auto Painting, Auto Centres.</p>
                    <button className='px-4 md:px-7 py-2 md:py-2.5 mt-2 text-sm bg-red-500 font-bold relative group hover:text-black overflow-hidden'>
                        <span className='z-10 relative '>CHECK ALL TALKS</span>
                        <div className='bg-white absolute top-0 left-0 w-full h-0 group-hover:h-full duration-500 transform skew-y-3'></div>
                    </button>
                </div>
                <div className='xl:flex flex-col xl:flex-row justify-center pt-12 space-y-2 xl:space-y-0 gap-24 py-1'>
                    <div className='bg-white shadow-lg text-lg italic    tracking-wide text-gray-400 px-12 py-6'>
                        <p>Lorem ipsum dolor sit consctetur <br /> adipiscing elit. Se lore quam, <br /> adipiscing in condimentum <br /> tristique vel, eleifend sed turpis.</p>
                    </div>
                    <div className='bg-white shadow-lg text-lg italic tracking-wide text-gray-400 px-12 py-6'>
                        <p>Lorem ipsum dolor sit consctetur <br /> adip pt-2iscing elit. Se lore quam, <br /> adipiscing in condimentum <br /> tristique vel, eleifend sed turpis.</p>
                    </div>
                    <div className='bg-white shadow-lg text-lg italic  tracking-wide text-gray-400 px-12 py-6'>
                        <p>Lorem ipsum dolor sit consctetur <br /> adipiscing elit. Se lore quam, <br /> adipiscing in condimentum <br /> tristique vel, eleifend sed turpis.</p>
                    </div>
                </div>
                <div className='xl:flex flex-wrap justify-evenly px-12 py-4 pt-8'>
                    <div className='flex gap-4'>
                        <img className='object-contain' src="./img/1 (12).jpg" alt="" />
                        <div>
                            <h2 className='font-bold'>Begha</h2>
                            <h3 className='text-red-500'>UI Designer, 7oroof Agency</h3>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <img className='object-contain' src="./img/2 (12).jpg" alt="" />
                        <div>
                            <h2 className='font-bold'>Omar Elnagar</h2>
                            <h3 className='text-red-500'>Civil Engineer , 7oroof Agency</h3>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <img className='object-contain' src="./img/3 (10).jpg" alt="" />
                        <div>
                            <h2 className='font-bold'>Ahmed Abd Alhaleem</h2>
                            <h3 className='text-red-500'>Graphic Designer, 7oroof Agency</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-white p-4 px-4 lg:px-60 xl:px-96 py-6 lg:py-12 xl:py-20'></div>
        </>
    )
}

export default PeopleTestimonials;
