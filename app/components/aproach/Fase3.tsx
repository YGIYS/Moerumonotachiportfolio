import React from "react";
import { useTheme } from "@/app/ThemeContext";
const Fase3 = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <h1
        className={`${isDarkMode ? "text-white" : "text-slate-700"}
        font-bold  sticky mx-auto text-center mt-14 `}
      >
        Phase 3
      </h1>
    </div>
  );
};

export default Fase3;
