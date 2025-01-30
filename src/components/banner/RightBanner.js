import React from 'react';
import { bannerImg } from "../../assets/index";
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Profile Image Container */}
      <div className="relative">
        {/* Main Profile Image */}
        <div className="rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img
            className="w-[280px] h-[280px] lgl:w-[400px] lgl:h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
            src={bannerImg}
            alt="Profile"
          />
        </div>

        {/* Decorative Ring */}
        <div className="absolute -inset-4 rounded-full border-2 border-designColor opacity-20 animate-spin-slow" />

        {/* Glowing Background Effect */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-designColor to-purple-600 opacity-20 blur-lg -z-10" />
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024]/50 to-[#202327]/50 rounded-full blur-3xl -z-20" />
    </div>
  );
};

export default RightBanner;