import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className='w-full border border-blue-600'>
                <div className='bg-[#002045] w-full'>
                    <div className='w-[80%] h-[85px] text-2xl m-auto flex justify-evenly items-center bg-[#002045] text-white'>
                        <h3 className='w-[40%] text-3xl font-bold'>AnyTech</h3>
                        <div className='flex w-[55%] justify-evenly items-center md:hidden lg:hidden'>
                            <FaLinkedin />
                            <FaPhoneAlt />
                            <IoMdMail />
                        </div>
                        <div className='md:flex lg:flex w-[55%] md:text-[#00e3e5] lg:text-[#00e3e5] justify-evenly items-center hidden'>
                            <h3 className='font-bold border-r border-white pr-4 text-md'>Our Services</h3>
                            <h3><a href='https://anytxn.com/en' className='text-[20px] hover:text-blue-500 transition-all delay-100 ease-in-out'>Any CaSS</a></h3>
                            <h3><a href='https://anytxn.com/en' className='text-[20px] hover:text-blue-500 transition-all delay-100 ease-in-out'>Any BaSS</a></h3>
                            <h3><a href='https://anytxn.com/en' className='text-[20px] hover:text-blue-500 transition-all delay-100 ease-in-out'>Any PaSS</a></h3>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#00152d] text-[#196ac8] border-t-[1px] border-white'>
                    <div className='w-[90%] h-[80px] m-auto pt-3 text-center md:flex lg:flex justify-between items-center'>
                        <a href='https://anytxn.com/en' className='hover:text-gray-300'>©2023 All rights reserved. Any Technology Pte Ltd.</a>
                        <a href='https://anytxn.com/en' className='hover:text-gray-300'>Privacy Policy.</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer