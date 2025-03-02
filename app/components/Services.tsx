"use client"
import React from 'react'
import { useTheme } from '../ThemeContext';

 const services = [
   {
     id: "01",
     title: "Web Design",
     description:
       "Crafting visually stunning and user-friendly websites tailored to your taste",
   },
   {
     id: "02",
     title: "SEO Optimization",
     description:
       " Enhancing your website's visibility and ranking on search engines",
   },
   {
     id: "03",
     title: "UX/UI Design",
     description:
       "Creating intuitive and engaging user experiences and interfaces",
   },
   {
     id: "04",
     title: "Digital Marketing",
     description:
       " Strategizing and executing comprehensive digital marketing ",
   },
   {
     id: "05",
     title: "AI content integration",
     description:
       "Crafting and engaging relevant content , including blogs, videos ,",
   },
 ];
const Services = () => {

   const {isDarkMode} = useTheme()
   
   
  return (
    <section
      id="Services"
      className={` ${
        isDarkMode
          ? "text-white border-blue-500"
          : "text-slate-700 border-slate-400 border-opacity-50"
      } py-20 mt-40 mb-20 relative border-[1.7px] rounded-xl `}
    >
      <div className=" container mx-auto flex  flex-col  lg:flex-row">
        <div className=" md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2
            className={`${
              isDarkMode ? "text-blue-400" : "text-slate-700"
            } text-5xl font-extrabold sticky mr-7 top-80 mt-40`}
          >
            {" "}
            SERVICES
          </h2>
        </div>

        <div className="md:w-3/4 ml-7">
          {services.map((service) => (
            <div key={service.id} className={`mb-14 flex items-start`}>
              <div
                className={`${
                  isDarkMode ? "text-blue-400" : "text-slate-700"
                } font-bold text-4xl mr-7`}
              >
                {service.id}
              </div>
              <div
                className={`${
                  isDarkMode ? "text-gray-300" : "text-slate-500"
                } font-bold text-lg mr-7 ml-3`}
              >
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services
