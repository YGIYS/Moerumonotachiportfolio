"use client";
import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
  const { isDarkMode } = useTheme();

  const [vicible, setvicible] = useState(false);

  useEffect(() => {
    const toggleVisisbility = () => {
      if (window.scrollY > 300) {
        setvicible(true);
      } else {
        setvicible(false);
      }
    };
    window.addEventListener("scroll", toggleVisisbility);

    return () => {
      window.removeEventListener("scroll", toggleVisisbility);
    };
  }, []);

  const Scrolltotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-blue-400" : "bg-slate-700"
      } fixed bottom-5 animate-pulse right-4 rounded-full`}
    >
      {vicible && (
        <button
          onClick={Scrolltotop}
          className={`${
            isDarkMode ? "text-white" : "text-slate-950"
          } fixed  animate-pulse -right-2 rounded-full w-72 h-80`}
        >
          {" "}
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
