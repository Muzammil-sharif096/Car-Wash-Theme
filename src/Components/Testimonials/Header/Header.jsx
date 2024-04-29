import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center px-4 lg:px-60 xl:px-96 py-6 lg:py-12 xl:py-20 bg-gray-100'>
                <h1 className='font-bold text-2xl lg:text-4xl xl:text-5xl'>TESTIMONIALS</h1>
                <h6 className='text-xs lg:text-sm xl:text-base'>Home / TESTIMONIALS</h6>
            </div>
            <div className='bg-white p-4 px-4 lg:px-60 xl:px-96 py-6 lg:py-12 xl:py-20'></div>
        </>
    )
}

export default Header
