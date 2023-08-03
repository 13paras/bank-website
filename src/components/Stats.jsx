import React from "react";
import { stats } from "../Constants";


const Stats = () => {
  return (
    <div className="mt-32">
      <ul className="flex justify-center space-x-10 text-white flex-wrap items-center space-y-7">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex space-x-6 items-center font-poppins flex-1`}
          >
            <h4 className="text-xl md:text-2xl font-semibold ">
              
              {stat.value}
            </h4>
            <p className="text-gradient md:text-xl uppercase"> {stat.title} </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
