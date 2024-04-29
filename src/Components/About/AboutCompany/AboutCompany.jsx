import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const AboutCompany = () => {
    return (
        <div className='xl:flex flex-col xl:flex-row justify-center  gap-16 p-12'>
            <div>
                <h3 className='text-red-500'>HISTORY</h3>
                <h1 className='text-3xl font-bold'>THE COMPANY</h1>
                <div className='border-2 mt-12 px-2 xl:w-[530px] w-full py-5'>
                    <ul className='text-xl space-y-3'>
                        <div className='flex justify-between'>
                            <li>ABOUT COMPANY</li>
                            <FaPlus className='text-sm text-red-500' />
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <li>OUR MISSION</li>
                            <FaPlus className='text-sm text-red-500' />
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <li>OUR VISION</li>
                            <FaPlus className='text-sm text-red-500' />
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                            <li>OUR GOALS</li>
                            <FaPlus className='text-sm text-red-500' />
                        </div>
                    </ul>
                </div>
            </div>
            <div>
                <h3 className='text-red-500'>WE ARE GOOD</h3>
                <h1 className='text-3xl font-bold'>OUR FEATURES</h1>
                <div className='grid xl:grid-cols-2 grid-cols-1 gap-6  mt-12'>
                    <div className='p-6 space-y-2 bg-gray-200'>
                        <FaRegClock className='text-4xl text-red-500' />
                        <h2 className='text-xl'>Always Available</h2>
                        <p className='text-sm'>Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                    </div>
                    <div>
                        <div className='p-6 space-y-2 bg-gray-200'>
                            <MdOutlineEventNote className='text-4xl text-red-500' />
                            <h2 className='text-xl'>Always Available</h2>
                            <p className='text-sm'>Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                        </div>
                    </div>
                    <div>
                        <div className='p-6 space-y-2 bg-gray-200'>
                            <FaWallet className='text-4xl text-red-500' />
                            <h2 className='text-xl'>Always Available</h2>
                            <p className='text-sm'>Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                        </div>
                    </div>
                    <div>
                        <div className='p-6 space-y-2 bg-gray-200'>
                            <FaRegStar className='text-4xl text-red-500' />
                            <h2 className='text-xl'>Always Available</h2>
                            <p className='text-sm'>Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany
