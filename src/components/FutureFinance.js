import React from 'react'
import FutureSlider from './FutureSlider';

const FutureFinance = () => {
  return (
    <div className='w-[100%] border'>
        <div className='w-[80%] border mx-auto'>
            <p className='text-center text-blue-500 tracking-widest py-3'>TECHNOLOGY BUILD FOR YOU</p>
            <h3 className='text-3xl text-slate-500 text-center'>The future of finance</h3>
            <FutureSlider />
        </div>
    </div>
  )
}

export default FutureFinance;