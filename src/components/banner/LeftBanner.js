import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaLinkedinIn, FaDiscord, FaGithub, FaReact } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "MERN Stack Developer.", "AI Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Shabbir Anjum</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a MERN Stack Developer with over a year of experience, I specialize in building responsive, scalable web
          applications. My expertise spans across frontend and backend development, API integration, and converting complex
          designs into clean, functional code. My experiences in hackathons and collaborative environments have honed my
          leadership and teamwork skills, allowing me to deliver AI-integrated solutions that enhance user experience and
          productivity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-3">
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
