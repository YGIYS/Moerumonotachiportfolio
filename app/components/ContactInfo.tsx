import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaVoicemail } from "react-icons/fa6";

import { useTheme } from "../ThemeContext";
const ContactInfo = () => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <div
        className={`${
          isDarkMode ? "bg-slate-950 " : "bg-slate-100  "
        } flex flex-col items-center rounded-xl p-5 md:w-full sm:w-auto`}
      >
        <div
          className={`${
            isDarkMode ? "" : ""
          } w-full  sm:ml-5 md:ml-10 rounded-xl flex flex-row`}
        >
          <FaPhone
            className={`${
              isDarkMode
                ? " bg-blue-500 fill-white"
                : "bg-amber-500 fill-slate-700"
            } w-14 h-12 rounded-full p-4 mt-3 md:w-11 md:h-10 sm:w-5 sm:h-5 `}
          />
          <div
            className={`${
              isDarkMode ? "text-blue-500" : "text-amber-500"
            } flex flex-col ml-7 mb-7   sm:ml-5 md:ml-5 p`}
          >
            <h2 className={` font-semibold mb-[1px] h2`}> Phone</h2>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-slate-500"
              }  font tracking-wide w-10 md:tracking-tight sm:text-sm sm:w-15 sm:ml-1 p`}
            >
              +2347064357238
            </p>
          </div>
        </div>

        <div
          className={`${
            isDarkMode ? "" : ""
          } w-full  sm:ml-5 md:ml-10 rounded-xl flex flex-row`}
        >
          <FaVoicemail
            className={`${
              isDarkMode
                ? " bg-blue-500 fill-white"
                : "bg-amber-500 fill-slate-700"
            } w-14 h-12 rounded-full p-4 mt-3 md:w-11 md:h-10 sm:w-5 sm:h-5 `}
          />
          <div
            className={`${
              isDarkMode ? "text-blue-500" : "text-amber-500"
            } flex flex-col ml-7 mb-7 sm:ml-5 md:ml-5 `}
          >
            <h2 className={`h2 font-semibold mb-[1px]`}> Email</h2>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-slate-500"
              }  lg:tracking-wide w-5 md:tracking-wide sm:tracking-tighter  sm:w-5 sm:ml-1 text-wrap sm:mr-4 p`}
            >
              Richmanolimini2@gmail.com
            </p>
          </div>
        </div>

        <div
          className={`${
            isDarkMode ? "" : ""
          } w-full  sm:ml-5 md:ml-10  rounded-xl flex flex-row`}
        >
          <FaLocationPin
            className={`${
              isDarkMode
                ? " bg-blue-500 fill-white"
                : "bg-amber-500 fill-slate-700"
            } w-12 h-12 rounded-full p-4 mt-3 md:w-11 md:h-10 sm:w-5 sm:h-5`}
          />
          <div
            className={`${
              isDarkMode ? "text-blue-500" : "text-amber-500"
            } flex flex-col lg:ml-7 md:ml-5 ml-7 sm:ml-5 mb-7  p`}
          >
            <h2 className={` font-semibold mb-[1px] h2`}>
              {" "}
              Adress
            </h2>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-slate-500"
              }  text-wrap   p`}
            >
              7 Kontangora close garki, Abuja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
