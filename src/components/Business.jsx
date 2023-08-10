import React from "react";
import { features } from "../Constants/index";
import index from "../assets/index";
import Button from "./Button";

const FeatureCard = ({ icon, id, title, content }) => (
  <div className={`flex items-center justify-center space-x-4 space-y-6 font-poppins feature-card px-3 py-2 rounded-2xl  cursor-pointer ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} `}>
    <div className="w-[64px] h-[64px] bg-dimBlue rounded-full flex items-center justify-center">
    <img className="w-[60%] h-[40%] rounded-full object-contain " src={icon} alt="" />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-semibold text-xl text-white"> {title} </h4>
      <p className="text-dimWhite font-normal"> {content} </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="font-poppins mt-32 flex flex-col sm:flex-row">
    <div className="space-y-10 text-center sm:text-left sm:w-2/4">
      <h1 className="font-poppins text-4xl md:text-5xl text-white">
        You do the business, <br className="hidden sm:block" /> we'll handle the
        money.
      </h1>
      <p className="text-gray-400 leading-relaxed mx-auto sm:mx-0 w-2/3">
        With the right credit card, you can imporve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market
      </p>
      <div>
        <Button />
      </div>
    </div>

    <div className="font-poppins text-white sm:w-2/4 w-[75%] mx-auto mt-20 sm:mt-0 sm:mx-0">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
