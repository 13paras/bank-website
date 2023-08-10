import React from 'react';
import { feedback } from '../Constants/index'
import Feedback from './Feedback';
import index from '../assets/index'

const Testimonials = () => (
    <div id='clients' className='mt-32'>
      <div className='flex justify-center md:space-x-36 space-x-20 items-center font-poppins w-[80%] mx-auto md:w-full md:mx-0'>
          <h1 className='text-2xl md:text-3xl font-semibold text-white'>What people are <br className="hidden md:block" /> saying about us</h1>
          <p className='font-normal text-dimWhite'>Everything you need to accept card payments <br className="hidden md:block" /> and grow your business anywhere on the planet</p>
      </div>

      <div className='mt-28 grid md:grid-cols-3 gap-12 w-96 mx-auto md:w-full md:mx-0'>
        {
          feedback.map((card) =>(
            <Feedback key={card.id} {...card} />
          ))
        }
      </div>
      <div className=' flex flex-wrap justify-around items-center mt-20 gap-6'>
        <img className='w-[193px] h-[50px] bg-blue-hover' src={index.airbnb} alt="" />
        <img className='w-[193px] h-[50px]' src={index.binance} alt="" />
        <img className='w-[193px] h-[50px]' src={index.coinbase} alt="" />
        <img className='w-[193px] h-[50px]' src={index.dropbox} alt="" />
      </div>
    </div>
    /* max-w-[90%] mx-auto grid grid-flow-col  gap-4 grid-rows-2 mt-20 */
  )

export default Testimonials