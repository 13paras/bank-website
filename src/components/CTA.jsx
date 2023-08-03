import React from 'react';
import Button from "./Button";

const CTA = () => {
  return (
    <div className='mt-32 flex bg-black-gradient-2 py-4 px-10 justify-between items-center rounded-xl box-shadow'>
      <div>
        <h1 className='text-4xl font-poppins font-semibold text-white'>Let's try our service now!</h1>
        <p className='font-normal w-[60%] text-dimWhite pt-7'>Everything you need to accept card payments and grow your business anywhere on the planet</p>
      </div>

      <div className='relative -top-12 right-4'>
        <Button />
      </div>
    </div>
  )
}

export default CTA