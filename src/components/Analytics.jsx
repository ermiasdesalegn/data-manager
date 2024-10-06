import React from "react";
import laptop from "../assets/laptop.jpg";
function Analytics() {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop" />
        <div className="px-4 flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-sm">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="font-bold md:text-3xl sm:text-2xl text-2xl bg-gray-300 py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-sm font-bold text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            possimus quis vel a animi velit nihil facilis minus illum modi
            accusantium asperiores, dolorum dolores consequatur fugiat nesciunt
            odit ab quam?
          </p>
          <button className="bg-[#000300] my-6 mx-auto md:mx-0 py-3 rounded-md  text-[#00df9a] font-medium w-[200px] block ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
// analytics;
