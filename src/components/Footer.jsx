import React from 'react';
import index from '../assets/index';
import { footerLinks, socialMedia } from '../Constants/index'
import styles from '../Styles';

const Footer = () => {
  return (
    <section className='mt-28'>
      {/* footer links */}
      <div className='flex flex-col md:flex-row'>
        <div className=''>
          <img className='w-[266px] h-20' src={index.logo} alt="logo" />
          <p className={`${styles.paragraph} w-[75%] my-10`} >A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex justify-center space-x-24'>
          {
            footerLinks.map((footerLink) =>(
              <div 
              className=''
              key={Math.random()}>
                <h1 className='text-lg pb-6 text-white cursor-pointer'>
                  {footerLink.title}
                </h1>
                <ul className='font-poppins text-dimWhite leading-[1.8] md:leading-[2.2]'>
                  {footerLink.links.map((link) =>(
                    <li key={Math.random()}> <a className=' hover:bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text hover:text-transparent' href="#">{link.name}</a> </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      {/* footer copyright and socialmedia */}
      <div className='mt-14 border border-t-[1px] py-5 border-t-gray-600 flex justify-between items-center'>
          <p className='text-dimWhite'>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
          <ul className='flex items-center space-x-6'>
            {
              socialMedia.map((icons) =>(
                <img className='bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer' key={icons.icon} src={icons.icon} alt="" />
              ))
            }
          </ul>
      </div>
    </section>
  )
}

export default Footer