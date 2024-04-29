import React from 'react';

const HomeCarItem = () => {
    return (
        <div className='pt-20 p-5 md:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 m-2 p-2 lg:w-[70%] mx-auto w-full'>
                <div className='image1 px-8 p-12 '>
                    <div className='h-2 w-2 bg-red-500 mt-16'></div>
                    <h1 className='text-white text-lg md:text-3xl pt-4 font-bold'>Car Wheels</h1>
                    <h3 className='text-red-500 text-sm pt-1 tracking-wider'>Best Metal</h3>
                </div>
                <div className='image3 px-8 p-12 '>
                    <div className='h-2 w-2 bg-red-500 mt-16'></div>
                    <h1 className='text-white text-lg md:text-3xl pt-4 font-bold'>Car Engines</h1>
                    <h3 className='text-red-500 text-sm pt-1 tracking-wider'>Best Prices</h3>
                </div>
                <div className='image3 px-8 p-12 '>
                    <div className='h-2 w-2 bg-red-500 mt-16'></div>
                    <h1 className='text-white text-lg md:text-3xl pt-4 font-bold'>Car Batteries</h1>
                    <h3 className='text-red-500 text-sm pt-1 tracking-wider'>Best Quality</h3>
                </div>
            </div>
        </div>
    );
};

export default HomeCarItem;
