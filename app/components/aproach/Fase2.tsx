import React from 'react'
import { useTheme } from '@/app/ThemeContext'
const Fase2 = () => {
    const {isDarkMode} = useTheme()
  return (
    <div>
      <h1
        className={`${
          isDarkMode ? "text-white" : "text-slate-700"
        } font-bold text-3xl`}
      >
        
        Second      Phase
      </h1>
    </div>
  );
}

export default Fase2