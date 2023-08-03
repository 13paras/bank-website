import React from 'react';
import index from '../assets/index'

const Billing = () => {
  return (
    <section className='mt-20 flex flex-col justify-center items-center md:flex-row'>
      <div className='md:w-2/4 w-[75%]'>
        <img 
        className=' md:w-[80%] md:h-[80%]'
        src={index.bill} alt="" />
      </div>

      <div className='text-center md:text-left mt-10 md:mt-0 font-poppins w-[80%] md:w-2/4 space-y-7 pl-10'>
        <h1 className='text-4xl leading-relaxed text-white font-semibold mt-10 sm:mt-0'>
        Easily control your <br className='hidden md:block'/> billing & invoicing.
        </h1>
        <p className='text-dimWhite sm:w-[70%] mx-auto md:mx-0'>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex justify-center md:justify-start'>
          <img src={index.apple} alt="apple" />
          <img src={index.google} alt="playstore" />
        </div>
      </div>
    </section>
  )
}

export default Billing