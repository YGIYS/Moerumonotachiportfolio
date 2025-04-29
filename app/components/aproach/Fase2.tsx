import React from "react";
import { useTheme } from "@/app/ThemeContext";
const Fase2 = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-slate-700"
        } font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl sticky mx-auto text-center mt-20`}
      >
        Phase 2
      </h1>
    </div>
  );
};

export default Fase2;
