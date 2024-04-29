import React from 'react';

const LatestNews = () => {
    return (
        <div className='bg-gray-50 p-8 md:p-20 space-y-1'>
            <h5 className='text-red-500 text-sm tracking-widest text-center'>IN THE NEWS</h5>
            <h1 className='font-bold text-3xl text-center'>LATEST NEWS</h1>
            <div className='flex flex-col xl:flex-row md:justify-evenly px-4 md:px-24'>
                <p className='text-base text-center md:text-left'>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages,  Automobile Mechanicals, Mechanic <br /> Workshops, Auto Painting, Auto Centres.</p>
                <button className='px-4 md:px-7 py-2 md:py-2.5 mt-2 text-sm bg-red-500 font-bold relative group hover:text-black overflow-hidden'>
                    <span className='z-10 relative'>CHECK ALL NEWS</span>
                    <div className='bg-white absolute top-0 left-0 w-full h-0 group-hover:h-full duration-500 transform skew-y-3'></div>
                </button>
            </div>
            <div className='md:flex flex-wrap justify-center space-y-2 gap-16 pt-12'>
                <div className='bg-white border-2 border-gray-300 shadow-lg space-y-2  md:w-96'>
                    <img src="./img/1 (15).jpg" alt="" className='w-full' />
                    <div className='px-3 py-5'>
                        <h1 className='font-bold text-lg' >FRAMING AND INSULATING WALLS IN <br /> WAREHOUSE AND CORPORATE</h1>
                        <h3 className=''>On: Feb 12, 2015</h3>
                        <hr className='border-t border-gray-300 my-2' />
                        <p className='text-sm'>Duis dapibus aliquam mi, et euismod scelerisque ut. <br /> Vivamus elit quis urna adipiscing, Duis dapibus <br /> aliquam mi, et euismod scelerisque ut. Vivamus elit <br /> quis urna adipiscing ...</p>
                    </div>
                </div>
                <div className='bg-white border-2 border-gray-300 shadow-lg space-y-2  md:w-96'>
                    <img src="./img/2 (15).jpg" alt="" className='w-full' />
                    <div className='px-3 py-5'>
                        <h1 className='font-bold text-lg' >FRAMING AND INSULATING WALLS IN <br /> WAREHOUSE AND CORPORATE</h1>
                        <h3 className=''>On: Feb 12, 2015</h3>
                        <hr className='border-t border-gray-300 my-2' />
                        <p className='text-sm'>Duis dapibus aliquam mi, et euismod scelerisque ut. <br /> Vivamus elit quis urna adipiscing, Duis dapibus <br /> aliquam mi, et euismod scelerisque ut. Vivamus elit <br /> quis urna adipiscing ...</p>
                    </div>
                </div>
                <div className='bg-white border-2 border-gray-300 shadow-lg space-y-2  md:w-96'>
                    <img src="./img/3 (12).jpg" alt="" className='w-full' />
                    <div className='px-3 py-5'>
                        <h1 className='font-bold text-lg' >FRAMING AND INSULATING WALLS IN <br /> WAREHOUSE AND CORPORATE</h1>
                        <h3 className=''>On: Feb 12, 2015</h3>
                        <hr className='border-t border-gray-300 my-2' />
                        <p className='text-sm'>Duis dapibus aliquam mi, et euismod scelerisque ut. <br /> Vivamus elit quis urna adipiscing, Duis dapibus <br /> aliquam mi, et euismod scelerisque ut. Vivamus elit <br /> quis urna adipiscing ...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
