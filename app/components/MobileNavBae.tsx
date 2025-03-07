"use client"
import React, { useState } from 'react'

const MobileNavBae = () => {
    const [nav, setNav] = useState(false);
    
    const toggleNav = () => {
       setInterval(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }
  
    return (
   
      <div onClick={toggleNav}>
      
    </div>
  )
}

export default MobileNavBae
