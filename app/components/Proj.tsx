"use client";
import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

import { useTheme } from "../ThemeContext";

const Proj = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${
        isDarkMode ? "bg-black-100" : "bg-violet-200"
      } rounded-xl p-5`}
    >
      <h1
        className={`${
          isDarkMode ? "text-white" : "from-slate-500 to-violet-950"
        }  text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-center pt-5`}
      >
        {" "}
        Projects
      </h1>
      <ThreeDCardDemo />
    </div>
  );
};

export default Proj;
