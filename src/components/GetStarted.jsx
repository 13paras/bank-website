import React from 'react';
import index from "../assets/index"

const GetStarted = () => {
  return (
    <div className='w-[144px] h-144px] bg-blue-gradient rounded-full flex justify-center items-center cursor-pointer p-[2px] '>
      <div className='flex justify-center items-center flex-col w-[100%] h-[100%]  bg-black-gradient rounded-full cursor-pointer'>
        <div className='flex flex-col hover:animate-pulse m-[45px] bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent font-poppins '>
          <p className='flex space-x-1'>
            <span>Get</span>
            <img className='' src={index.arrowUp} alt="" />
          </p>
          <span>Started</span>
        </div>
      </div>
    </div>
  )
}

export default GetStarted