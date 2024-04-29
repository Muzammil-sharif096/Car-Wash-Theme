import React, { useState } from 'react';

const Card = ({ HomeNewItemData }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {
                HomeNewItemData ?
                    <div className='lg:text-center py-4 md:text-left text-center space-y-1'>
                        <div
                            className='relative overflow-hidden'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img className={`transform transition-transform duration-300 lg:w-fit w-full ${isHovered ? 'scale-105' : 'scale-100'}`} src={HomeNewItemData.img} alt="" />
                            <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                                <div className={`absolute ${isHovered ? 'bottom-2' : '-bottom-14'} transition-all duration-300`}>
                                    <button className="text-white px-2 rounded-md py-1.5 m-2 bg-red-500 hover:bg-red-600 mb-4">Add to Cart</button>
                                    <button className="text-white px-2 rounded-md py-1.5 m-2 bg-red-500 hover:bg-green-600">Items Details</button>
                                </div>
                            </div>
                        </div>
                        <h6 className='text-sm text-gray-400 pt-4'>{HomeNewItemData.h6}</h6>
                        <h1 className='text-lg font-bold tracking-wider'>{HomeNewItemData.h1}</h1>
                        <p className='text-red-500 font-bold tracking-wide'>{HomeNewItemData.price}</p>
                    </div> : null
            }
        </>
    );
};

export default Card;