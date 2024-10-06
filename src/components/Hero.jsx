import React from "react";
import Typed from "react-typed";
// Import Typed as a named export
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full  flex flex-col items-center mt-[-96px] mx-auto text-center justify-center h-screen">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYSIS
        </p>
        <h1 className="text-4xl md:text-7xl sm:text-6xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex items-center">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
            fast, flexible financing for
          </p>
          <ReactTyped
            className="pl-2. text-xl sm:text-4xl md:text-5xl font-bold pl-2 md:pl-4"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-500">
          Monitor your data analysis to increase revenue for BTB,BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] my-6 mx-auto py-3 rounded-md  text-[#000300] font-medium w-[200px]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
