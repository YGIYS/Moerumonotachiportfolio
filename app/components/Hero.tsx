"use client"
import React, {  useEffect } from "react";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { Spotlight } from './ui/Spotlight';

import Image from 'next/image';

import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import "@/app/globals.css"
import hero from "@/app/asset/hero.png"
import MobileNavBae from "./MobileNavBae";


const Hero = () => {
  const { isDarkMode, toggleTheme } = useTheme();
 
   useEffect(() => {
     document.body.className = isDarkMode ? "dark" : "light";
   }, [isDarkMode]);
  
 
 
 
 
 

 
   

  return (
    <div className="pb-20 pt-14 relative">
      <div
        className={`${
          isDarkMode ? "bg-black-200/30" : " bg-blue-50/30"
        }  fixed top-0 pb-7  left-0 w-full h-20  backdrop-blur-md  z-50   `}
      >
        <li className="">
          <Link
            href="#Home"
            className={`${
              isDarkMode
                ? `btn brightness-100 btn-ghost text-2xl font-bold border-lime-100 border-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#87ceeb,0_0_15px_#87ceeb,0_0_30px_#87ceeb]"
 text-transparent bg-clip-text bg-white bg-gradient-to-r from-white rounded-xl   z-50  to-blue-400 hover:brightness-100 hover:bg-blue-700  outline-none outline-blue-700 [text-stroke:2px_#ff0] nav-link`
                : ` btn brightness-100 btn-ghost text-2xl sm:text-base md:text-xl font-bold border-blue-200 border-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#87ceeb,0_0_15px_#87ceeb,0_0_30px_#87ceeb]
 text-transparent bg-clip-text bg-gradient-to-r from-black rounded-xl  z-50   to-blue-500 hover:brightness-200  outline-none outline-blue-700 [text-stroke:2px_#ff0]" nav-link `
            }    absolute top-5  bg-white/80 backdrop-blur-md shadow-lg  nav-link
`}
            onClick={() => {}}
          >
            MoeruMonoTachi
          </Link>
        </li>

        <MobileNavBae />
        {/* themethoggle */}
        <div
          className="cursor-pointer absolute   flex top-5 z-20 right-24 md:right-4 sm:-right-1 nav-theme-icon
"
          onClick={toggleTheme}
        >
          {/* Sun icon */}
          <svg
            className={`absolute h-10 w-10 nav-theme-icon  fill-current transition-all duration-500 ease-in-out transform ${
              isDarkMode
                ? "opacity-0 scale-0"
                : "opacity-100 scale-100 fill-amber-400 text-blue-400 "
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Moon icon */}
          <svg
            className={` nav-theme-icon absolute h-10 w-10 sm:w-4 sm:h-5  md:h-10 md:w-10 lg:h-10 lg:w-10 fill-current transition-all duration-500 ease-in-out transform ${
              isDarkMode
                ? "opacity-100 scale-100 fill-white"
                : "opacity-0 scale-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </div>
      </div>

      {/* side menu */}

      {/* sidemenu botm */}

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="gold"
        />
        <Spotlight
          className="-top-40 right-10 md:right-2 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="top-5 left-72 md:-left-50 md:-top-20 h-screen"
          fill="yellow"
        />
        <Spotlight
          className="-top-40 -right-50 md:right-70 md:-top-20 left-full h-screen"
          fill="orange"
        />{" "}
      </div>
      {/* Grid background */}
      {/* light */}
      <div
        className="h-screen w-full dark:bg-black mt-3 
       bg-white    bg-grid-small-blue-400  flex items-center justify-center absolute top-0 left-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[70vw]  flex flex-col text-center  justify-center ">
          <p
            className={`${
              isDarkMode ? "text-blue-800" : "text-blue-800"
            } text-center -mb-8  font-mono font-medium tracking-wider`}
          >
            Dynamic digital web magic with MoeruMonoTachi
            <span
              className={`${isDarkMode ? "text-blue-700" : "text-blue-800"}`}
            >
              Tech
            </span>
          </p>

          <TextGenerateEffect
            className={`${
              isDarkMode ? "text-slate-100" : "text-black"
            }  z-10 Hero-centertext   text-center  mb-2`}
            words="  Crafting Innovative Digital Solutions "
          />

          <p
            className={`${
              isDarkMode ? "text-slate-500" : "text-slate-500"
            }  z-10 -mt-4  text-sm sm:text-base text-center pt-2 pb-4  `}
          >
            <span
              className={`${isDarkMode ? "text-blue-800" : "text-blue-900"}`}
            >
              Hi
            </span>{" "}
            I'm Richman, a software developer based in{" "}
            <span
              className={`${isDarkMode ? "text-blue-900" : "text-blue-900"}`}
            >
              Nigeria.
            </span>
          </p>

          <div className="flex justify-center items-center">
            <div
              className={`${
                isDarkMode ? "bg-blue-500" : " bg-blue-500"
              }  rounded-full overflow-hidden w-32 imag h-32 sm:w-48 sm:h-48 md:w-64 md:h-64`}
            >
              <Image
                src={hero}
                height={70} // Adjusted for mobile
                width={70} // Adjusted for mobile
                alt="Heroimg"
                className="object-contain w-full h-full " // Ensures the image covers the circle
              />
            </div>
          </div>
          {/* button */}
          <button className=" text-nowrap inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border w-40 mx-auto mt-5  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-5 font-medium text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Projs preview 📁
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero
