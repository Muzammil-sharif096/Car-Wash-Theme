import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);

    return (
        <div className='p-12 bg-gray-200 flex justify-center gap-12'>
            <div>   
                <img src="./img/1 (14).jpg" alt="" />
                <div className='px-3 py-2'>
                    <h1 className='text-lg font-bold'>MAHMOUD BAGHAGHO</h1>
                    <h3 className='text-sm text-red-500'>Art Director</h3>
                    <button onClick={() => setShowDiv1(true)} className='px-5 py-1 bg-blue-300 mt-2 rounded-md'>View Profile</button>
                    {
                        showDiv1 && (   
                            <div className='absolute h-full w-full inset-0 z-[9999]'>
                                <div className="absolute inset-0 left-0 top-0 bg-black/50 h-screen w-full" />
                                <div className='bg-black fixed top-24 left-[525px] w-[45%] h-96  p-12 '>
                                    <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer' onClick={() => setShowDiv1(false)}><FaTimes /></h1>
                                    <div className='flex justify-between items-center'>
                                        <img className='h-20' src="./img/1 (14).jpg" alt="" />
                                        <div>
                                            <h1 className='text-lg text-white font-bold'>MAHMOUD BAGHAGHO</h1>
                                            <h3 className='text-sm text-red-500'>Art Director</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <img src="./img/4 (6).jpg" alt="" />
                <div className='px-3 py-2 relative'>
                    <h1 className='text-lg font-bold'>AHMED HASSAN</h1>
                    <h3 className='text-sm text-red-500'>Web Developing</h3>
                    <button onClick={() => setShowDiv2(true)} className='px-5 py-1 bg-blue-300 mt-2 rounded-md'>View Profile</button>
                    {
                        showDiv2 && (
                            <div className='bg-black  fixed top-24 left-[525px] opacity-80 w-[45%] h-96  p-12'>
                                <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer' onClick={() => setShowDiv2(false)}><FaTimes /></h1>
                                <div className='flex justify-between items-center'>
                                    <img className='h-20' src="./img/4 (6).jpg" alt="" />
                                    <div>
                                        <h1 className='text-lg text-white font-bold'>AHMED HASSAN</h1>
                                        <h3 className='text-sm text-red-500'>Web Developing</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <img src="./img/3 (11).jpg" alt="" />
                <div className='px-3 py-2 relative'>
                    <h1 className='text-lg font-bold'>MOSTAFA AMIN</h1>
                    <h3 className='text-sm text-red-500'>Graphic Design</h3>
                    <button onClick={() => setShowDiv3(true)} className='px-5 py-1 bg-blue-300 mt-2 rounded-md'>View Profile</button>
                    {
                        showDiv3 && (
                            <div className='bg-black  fixed top-24 left-[525px]  opacity-80 w-[45%] h-96  p-12'>
                                <h1 className='text-right absolute top-2 right-6 text-white cursor-pointer' onClick={() => setShowDiv3(false)}><FaTimes /></h1>
                                <div className='flex justify-between items-center'>
                                    <img className='h-20' src="./img/3 (11).jpg" alt="" />
                                    <div>
                                        <h1 className='text-lg text-white font-bold'>MOSTAFA AMIN</h1>
                                        <h3 className='text-sm text-red-500'>Graphic Design</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
