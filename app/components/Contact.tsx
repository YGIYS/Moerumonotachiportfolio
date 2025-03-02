"use client"

import React from 'react'

import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {

    
  return (
    <div
      className={`pt-10 pb-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10 `}
    >
      <div >
        <ContactForm />
      </div>
      <div>
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact
