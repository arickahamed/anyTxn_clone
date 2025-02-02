import React from 'react'
import cloudData from '../asset/images/cloud_data.jpg';
import { philosophy } from '../asset/data';

const Philosophy = () => {
  return (
    <div className='w-[100%]'>
        <div className='w-[80%] mx-auto py-5'>
            <h3 className='text-center text-[18px] text-blue-700 font-bold tracking-widest'>OUR PHILOSOPHY</h3>
            <h1 className='text-center text-[35px] text-slate-700 font-bold py-3 pb-3'>Human-centred innovation</h1>
            <div className=''>
                  <img src={cloudData} alt='cloud data image' />
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row md:justify-around md:flex-wrap lg:justify-around items-center w-[100%] py-10'>
                {philosophy.map((data, index) => (
                    <div key={index} className='p-3 mb-5 border bg-[#f8fcff] rounded-lg w-[80%] md:w-[40%] lg:w-[30%]'>
                        <img className='w-[15%] py-3' src={data.img} alt={data.title} />
                        <p className='pb-3 text-xl md:text-2xl lg:text-2xl text-[#0b305b] font-semibold'>{data.title}</p>
                        <p className='text-[#1663b9] text-md'>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Philosophy