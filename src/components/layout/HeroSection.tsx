import React from "react";
import banner from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center container mx-auto mt-30">
      <div>
        <h1 className="text-7xl font-bold pb-6">
          <span className="text-[#0F172A] tex">Build Your Ideal</span> <br />{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-[#475569] text-2xl pb-10">
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your{" "}
          <br /> next project.
        </p>

        <div className="flex gap-3 pt-4">
          <button className="btn btn-active w-42 h-10 bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-medium text-sm rounded-lg flex items-center justify-center transition duration-200 hover:opacity-90">
            Explore Technologies
          </button>
          <button className="btn btn-neutral btn-outline w-42 h-10 bg-white text-[#374151] border border-[#E5E7EB] font-medium text-sm rounded-lg flex items-center justify-center transition duration-200 hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
