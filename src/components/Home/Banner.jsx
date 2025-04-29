"use client";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiC,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative h-[700px] flex items-center justify-center text-black px-4">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale rounded-2xl"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-500 opacity-80 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 p-10 rounded-2xl shadow-lg max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-3">Welcome to NextWave</h1>
        <p className="text-lg text-black mb-5">
          Empowering businesses with cutting-edge software, AI, and web
          solutions. From custom development to intelligent automation, NextWave
          is your partner in digital transformation.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-md cursor-pointer transition">
          Get Started with Us
        </button>

        {/* Scrollable Tech Icons on Mobile */}
        <div className="mt-12 overflow-x-auto">
          <div className="flex justify-start sm:justify-center min-w-max gap-0">
            <div className="flex items-center justify-center bg-[#8c52ff] rounded-full p-4 ml-[-30px]">
              <SiReact className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#38BDF8] rounded-full p-4 ml-[-30px]">
              <SiTailwindcss className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#000000] rounded-full p-4 ml-[-30px]">
              <SiNextdotjs className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#306998] rounded-full p-4 ml-[-30px]">
              <SiPython className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#007396] rounded-full p-4 ml-[-30px]">
              <FaJava className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#336791] rounded-full p-4 ml-[-30px]">
              <SiPostgresql className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#f0db4f] rounded-full p-4 ml-[-30px]">
              <SiJavascript className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#3178C6] rounded-full p-4 ml-[-30px]">
              <SiTypescript className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#4479A1] rounded-full p-4 ml-[-30px]">
              <SiMysql className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#A8B9CC] rounded-full p-4 ml-[-30px]">
              <SiC className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#E34F26] rounded-full p-4 ml-[-30px]">
              <SiHtml5 className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-[#264DE4] rounded-full p-4 ml-[-30px]">
              <SiCss3 className="text-white text-3xl" />
            </div>
            <div className="flex items-center justify-center bg-white border-[#8c52ff] rounded-full p-4 ml-[-30px]">
              <h1 className="text-black text-xl">11+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
