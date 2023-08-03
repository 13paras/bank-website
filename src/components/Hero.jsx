import React from "react";
import index from "../assets/index";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section className="mt-40 flex md:flex-row flex-col font-poppins">
    <div className="relative">
      <div className="text-gray-400 flex items-center px-4 pl-2 rounded-lg bg-discount-gradient  w-max mx-auto md:mx-0">
        <img className="" src={index.discount} alt="" />
        <p>
          {" "}
          <span className="text-white font-semibold"> 20%</span> Discount for{" "}
          <span className="text-white font-semibold">1 Month</span> Account
        </p>
      </div>

      <h1 className="text-6xl ss:text-7xl text-white font-semibold ss:leading-snug mt-10 flex justify-center flex-col items-center md:block">
        The Next <br />
        <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
          Generation <br />
        </span>
        <span className="text-center md:text-left">Payment Method.</span>
        
      </h1>

    {/* Get Started button above md: */}
      <div className="hidden md:block absolute top-10 right-24">
        <GetStarted />
      </div>

      <p className="text-gray-400 w-2/3 md:w-2/4 mt-14 md:mt-10 mx-auto md:mx-0 md:block text-xl md:text-lg leading-normal md:leading-snug text-center md:text-left">
        Our team of experts usses a methodology to identify the credit cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </p>
    </div>

    <div className="w-[80%] mt-20 md:mt-0 mx-auto md:mx-0">
      <img className="" src={index.robot} alt="robot" />
    </div>

    {/* Get Started button for mobile devices */}
    <div className="md:hidden flex justify-center mt-20">
        <GetStarted />
      </div>
  </section>
);

export default Hero;
