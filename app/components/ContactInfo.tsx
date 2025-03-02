import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaLocationPin, FaMapLocation } from 'react-icons/fa6'
import { FaVoicemail } from 'react-icons/fa6'

import { useTheme } from '../ThemeContext'
const ContactInfo = () => {
const {isDarkMode} = useTheme()


  return (
    <div>
      <div
        className={`${
          isDarkMode ? "bg-slate-950 " : "bg-slate-100  "
        } flex flex-col items-center rounded-xl p-5`}
      >
        <div
          className={`${
            isDarkMode ? "" : ""
          } w-full ml-20 rounded-xl flex flex-row`}
        >
          <FaPhone
            className={`${
              isDarkMode ? " bg-blue-500 fill-white" : "bg-amber-500 fill-slate-700"
            } w-14 h-12 rounded-full p-4 mt-3`}
          />
          <div
            className={`${
              isDarkMode ? "text-blue-500" : "text-amber-500"
            } flex flex-col ml-7 mb-7`}
          >
            <h1 className={`text-2xl font-semibold mb-[1px]`}> Phone</h1>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-slate-500"
              } text-lg font tracking-wide `}
            >
              +2347064357238
            </p>
          </div>
        </div>

        <div
          className={`${
            isDarkMode ? "" : ""
          } w-full ml-20 rounded-xl flex flex-row`}
        >
          <FaVoicemail
            className={`${
              isDarkMode
                ? " bg-blue-500 fill-white"
                : "bg-amber-500 fill-slate-700"
            } w-14 h-12 rounded-full p-4 mt-3`}
          />
          <div
            className={`${
              isDarkMode ? "text-blue-500" : "text-amber-500"
            } flex flex-col ml-7 mb-7`}
          >
            <h1 className={`text-2xl font-semibold mb-[1px]`}> Email</h1>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-slate-500"
              } text-lg font tracking-wide `}
            >
              Richmanolimini2@gmail.com
            </p>
          </div>
        </div>

        <div
          className={`${
            isDarkMode ? "" : ""
          } w-full ml-20 rounded-xl flex flex-row`}
        >
          <FaLocationPin
            className={`${
              isDarkMode
                ? " bg-blue-500 fill-white"
                : "bg-amber-500 fill-slate-700"
            } w-12 h-12 rounded-full p-4 mt-3`}
          />
          <div
            className={`${
              isDarkMode ? "text-blue-500" : "text-amber-500"
            } flex flex-col ml-7 mb-7`}
          >
            <h1 className={`text-2xl font-semibold mb-[1px]`}> Adress.</h1>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-slate-500"
              } text-lg font tracking-wide `}
            >
              7 Kontangora close garki Abuja
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo
