import React from 'react';
import index from '../assets/index';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className='mt-32 flex flex-col md:flex-row items-center justify-center mx-auto w-full'>
      <div className='space-y-12 w-[90%] md:w-[60%] text-center md:text-left mx-auto '>
         <h1 className='md:text-4xl text-5xl leading-relaxed text-white font-semibold font-poppins mx-5 md:mx-0 '>
          Find a better card deal <br className="hidden sm:block" />
          in few easy steps
         </h1>
         <p className="text-dimWhite font-poppins font-normal  w-[80%] md:w-3/4 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus praesentctetur ?
         </p>
         <Button />
      </div>

      <div className='w-[60%] mx-auto mt-32 md:mt-0'>
        <img 
        className='w-full md:w-[400px] md:h-[400px] object-contain'
        src={index.card} alt="" />
      </div>
    </section>
  )
}

export default CardDeal