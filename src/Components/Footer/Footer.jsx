import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { ImHeadphones } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
const Footer = () => {
    return (
        <>
            <footer className='bg-black opacity-90 p-4 md:p-8 lg:p-12 text-white'>
                <div className='flex flex-col lg:flex-row justify-center gap-8'>
                    <div className='border-2 px-4 py-2 space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold tracking-wide'>FREE SHIPPING</h1>
                            <h2 className='text-2xl md:text-4xl text-red-500'><FaTruck /></h2>
                        </div>
                        <p className='font-light tracking-wide text-sm md:text-base text-gray-300'>Lorem ipsum dolor siamet, adipiscing <br /> condimen tristique vel</p>
                    </div>
                    <div className='border-2 px-4 py-2 space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold tracking-wide'>FAIR PRICES</h1>
                            <h2 className='text-2xl md:text-4xl text-red-500'><FaMoneyBills /></h2>
                        </div>
                        <p className='font-light tracking-wide text-sm md:text-base text-gray-300'>Lorem ipsum dolor siamet, adipiscing <br /> condimen tristique vel</p>
                    </div>
                    <div className='border-2 px-4 py-2 space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold tracking-wide'>SECURE SHOPPING</h1>
                            <h2 className='text-2xl md:text-4xl text-red-500'><PiShoppingBagOpenBold /></h2>
                        </div>
                        <p className='font-light tracking-wide text-sm md:text-base text-gray-300'>Lorem ipsum dolor siamet, adipiscing <br /> condimen tristique vel</p>
                    </div>
                    <div className='border-2 px-4 py-2 space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold tracking-wide'>CUSTOMER SUPPORT</h1>
                            <h2 className='text-2xl md:text-4xl text-red-500'><ImHeadphones /></h2>
                        </div>
                        <p className='font-light tracking-wide text-sm md:text-base text-gray-300'>Lorem ipsum dolor siamet, adipiscing <br /> condimen tristique vel</p>
                    </div>
                </div>
                <hr className='w-[80%] mt-8 md:mt-12 mx-auto border border-gray-900' />
                <div className='flex flex-col lg:flex-row justify-center  gap-8 md:gap-20 pt-8 md:pt-12'>
                    <div>
                        <h1 className='text-lg font-bold'>About Us</h1>
                        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, adipiscing condimentum tristique <br /> vel, eleifend sed turpis. Amet, consectetur adipising elit <br /> Integer.</p>
                        <div className='flex gap-6 items-center py-3'>
                            <FaFacebook className='bg-gray-900 p-2 rounded-lg text-3xl' />
                            <FaGooglePlusG className='bg-gray-900 p-2 rounded-lg text-3xl' />
                            <FaTwitter className='bg-gray-900 p-2 rounded-lg text-3xl' />
                            <FaWifi className='bg-gray-900 p-2 rounded-lg text-3xl' />
                        </div>
                    </div>
                    <div>
                        <ul className='space-y-5 tracking-wide'>
                            <li className='text-lg font-bold'>My Account</li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                MY ACCOUNT
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                ORDER HISTORY
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                WISH LIST
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                NEWSLETTER
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-5 tracking-wide'>
                            <li className='text-lg font-bold'>Information</li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                ABOUT US
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                DELIVERY
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                INFORMATION
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                PRIVACY POLICY
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                TERMS & CONDITIONS
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-5 tracking-wide'>
                            <li className='text-lg font-bold'>Customer Service</li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                CONTACT US
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                RETURNS
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                SITE MAP
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='space-y-5 tracking-wide'>
                            <li className='text-lg font-bold'>Extras</li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                BRANDS
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                GIFT VOUCHERS
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                AFFILIATES
                            </li>
                            <li className='text-sm flex gap-1 items-center'>
                                <MdDoubleArrow className='text-red-500' />
                                SPECIALS
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='flex flex-col md:flex-row justify-around bg-black p-4 md:p-8 opacity-95 items-center'>
                <div>
                    <h1 className='text-white text-xs md:text-base'>Car Shop © All Rights Reserved. With Made With Love By <span className='text-red-500'>7oroof.com</span></h1>
                    <h2 className='text-white text-xs md:text-base'>Privacy Policy Terms Of Use Stores About Us</h2>
                </div>
                <div className='flex gap-4 p-4'>
                    <img src="./img/visa.png" alt="" className='w-12 h-auto' />
                    <img src="./img/mastercard (1).png" alt="" className='w-12 h-auto' />
                    <img src="./img/american-express (2).png" alt="" className='w-12 h-auto' />
                    <img src="./img/delta (2).png" alt="" className='w-12 h-auto' />
                    <img src="./img/mastercard (1).png" alt="" className='w-12 h-auto' />
                    <img src="./img/paypal.png" alt="" className='w-12 h-auto' />
                </div>
            </div>
        </>
    )
}

export default Footer
