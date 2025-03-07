import React from 'react'
import { useTheme } from '@/app/ThemeContext'
const Fase1 = () => {
    const {isDarkMode} = useTheme()
  return (
    <div>
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-slate-700"
        } font-bold text-3xl`}
      >
        First Phase
      </h1>
    </div>
  );
}

export default Fase1
