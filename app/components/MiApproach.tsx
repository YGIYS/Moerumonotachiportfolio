"use client";
import React from "react";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo";
import { useTheme } from "../ThemeContext";
import "@/app/globals.css";
const MiApproach = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id="My appoach">
      <h2
        className={`${isDarkMode ? "text-blue-400" : "text-slate-700"}  font-extrabold sticky mx-auto text-center top-80 mt-40`}
      >
        Logical and Creative Approach
      </h2>
      <CanvasRevealEffectDemo />
    </div>
  );
};

export default MiApproach;
