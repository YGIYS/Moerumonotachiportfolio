"use client";
import React from "react";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo";
import { useTheme } from "../ThemeContext";
const MiApproach = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id="My appoach">
      <h1
        className={`${isDarkMode ? "text-blue-400" : "text-slate-700"} text-5xl font-extrabold sticky mx-auto text-center top-80 mt-40`}
      >
        Logical and Creative Approach
      </h1>
      <CanvasRevealEffectDemo />
    </div>
  );
};

export default MiApproach;
