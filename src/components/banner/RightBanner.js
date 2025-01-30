import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="relative w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] rounded-full shadow-2xl shadow-designColor/50 border-[3px] border-[#202327] group">
        {/* Circular Image Container */}
        <div className="w-full h-full rounded-full overflow-hidden relative z-10">
          <img
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            src="https://media.licdn.com/dms/image/v2/D4D03AQHRCV6oTPmncw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719769700884?e=1743638400&v=beta&t=qXCEw3mw0bYPDqdE1shhOarx33x5sHMzbBIdbQ-Le3w"
            alt="bannerImg"
          />
        </div>

        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e2024] to-[#202327] animate-pulse opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

        {/* Shadow Effect */}
        <div className="absolute -bottom-2 w-[90%] h-[20px] bg-gradient-to-r from-transparent via-[#ff014f]/50 to-transparent blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default RightBanner;