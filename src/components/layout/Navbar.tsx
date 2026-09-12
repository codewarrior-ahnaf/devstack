import React from "react";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <>
      <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="flex justify-between container mx-auto px-6 py-4">
          <img src={logo} alt="" className="h-10" />

          <ul className="flex items-center gap-4 cursor-pointer">
            <li className="text-[#DB2777]">Home</li>
            <li className="text-[#475569]">Technologies</li>
            <li className="text-[#475569]">Projects</li>
            <li className="text-[#475569]">About</li>
            <li className="text-[#475569]">Contact</li>
          </ul>

          <div className="flex gap-4">
            <button className="cursor-pointer tect-[#334155]">Sign In</button>
            <button className="cursor-pointer bg-[#d91b7e] text-[#FFFFFF] px-8 py-3 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
