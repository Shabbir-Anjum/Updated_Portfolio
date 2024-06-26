import React from 'react'

import { contactImg } from "../../assets/index";
import { BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shabbir Anjum</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Software Engineer ¶ Front-end Developer ¶ Generative AI Enthusiast ¶ LeetCode 100+ ¶ PhD Candidate
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3318701099</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mahrshabbir768@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <Link
            to="https://discord.com/channels/@shabbir_anjum"
            target="_blank"
          >
            {" "}
            <span className="bannerIcon">
              <FaDiscord />
            </span>
          </Link>
          <Link to="https://github.com/Shabbir-Anjum" target="_blank">
            {" "}
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shabbir-anjum-942495177/"
            target="_blank"
          >
            {" "}
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </Link>
          <Link to="https://leetcode.com/mahrshabbir768/" target="_blank">
            <span className="bannerIcon">
              <BsCodeSlash />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft