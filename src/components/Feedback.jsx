import React from "react";
import index from "../assets/index";

const Feedback = ({ name, img, title, content }) => (
  <div className=" border border-transparent bgHover cursor-pointer py-10 relative rounded-3xl">
      <img
      className="absolute left-11 top-5 md:left-5 md:top-5" src={index.quotes} alt="" />
    <div className="flex flex-col items-center mt-14">
      <p className="text-white font-normal w-[290px] h-[100px]"> {content} </p>
      <div className="flex mt-5 w-[290px]">
        <img 
        className="w-[48px] h-[48px]"
        src={img} alt="" />
        <div className="pl-4">
          <h3 className="text-white font-semibold">{name}</h3>
          <h4 className="text-dimWhite font-normal">{title}</h4>
        </div>
      </div>
    </div>
  </div>
);

export default Feedback;
