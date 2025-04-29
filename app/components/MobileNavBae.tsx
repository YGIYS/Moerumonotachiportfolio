"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTheme } from "../ThemeContext";
import { navItems } from "@/data";
import { useCallback } from "react";
const MobileNavBar = () => {
  const { isDarkMode } = useTheme();
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    if (nav) {
   return   closeNav()
    }
  };
   const [activeSection, setActiveSection] = useState("Home");

   const scrollToSection = useCallback(
     (sectionId) => {
       const section = document.getElementById(sectionId);
       if (section) {
         section.scrollIntoView({
           behavior: "smooth",
         });
       }
     },
     [activeSection] // Dependency array
   );

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div>
      <div
        onClick={toggleNav}
        className={`${
          isDarkMode ? "fill-white-200" : "fill-slate-900"
        } absolute  top-[1.5rem] right-5 md:hidden border-[1px] rounded-xl `}
      >
        {nav ? (
          <AiOutlineClose
            className="p-2 fill-blue-500"
            size={35}
          />
        ) : (
          <AiOutlineMenu className="p-2 fill-blue-500" size={35} />
        )}
      </div>

      <div
        className={`${
          isDarkMode ? "bg-slate-950/95" : "bg-slate-900/95"
        } fixed left-0 top-[5rem] w-full h-[50rem] transform transition-transform duration-300   ${
          nav ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <ul
          className={`${
            isDarkMode ? "text-slate-100 " : "text-blue-400 "
          } flex flex-col items-center space-y-8 h-full pt-20 `}
        >
          {navItems.map((navItem, index) => (
            <li
              key={index}
              onClick={() => {
                scrollToSection(index);
              }}
            >
              <Link
                href={navItem.link}
                onClick={closeNav}
                className="text-3xl b"
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
