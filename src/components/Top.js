import React from 'react';
import topImg from "../asset/images/top_image.jpg";

const Top = () => {
  return (
    <div className='w-[100%] py-5'>
        <div className='w-[80%] md:flex justify-evenly items-center mx-auto'>
            <div className='md:w-[55%] lg:w-[60%]'>
                  <p className='text-center text-blue-500 tracking-widest text-sm'>POWERING THE FUTURE OF FINANCE</p>
                  <p className='py-2 text-slate-500 text-3xl text-center'>Uncovering new ways to delight customers</p>
                  <div className='block md:hidden lg:hidden w-[80%] mx-auto pb-3'>
                      <img src={topImg} alt='top image' />
                  </div>
                  <p className='font-semibold py-2 text-slate-700'>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                  <p className='text-slate-700'>Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success</p>
            </div>
            <div className='hidden md:block lg:block md:w-[40%] lg:w-[35]'>
                <img src={topImg} alt='top image' />
            </div>
        </div>
    </div>
  )
}

export default Top;