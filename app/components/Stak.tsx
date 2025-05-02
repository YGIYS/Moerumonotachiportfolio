"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import "@/app/globals.css";
import { useTheme } from "../ThemeContext";

const images = [
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" },
  { src: "/javascript.png", alt: "JavaScript" },
  { src: "/react.png", alt: "React" },
  { src: "/express.png", alt: "Express.js" },
  { src: "/tailwind.png", alt: "Tailwind" },
  { src: "/nodejs.png", alt: "Node.js" },
  { src: "/Next.js.svg", alt: "Next.js" },
  { src: "/git.png", alt: "git.js" },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Stak = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Triggers animation when 20% of the grid is visible

  const { isDarkMode } = useTheme();

  return (
    <>
      <section id="TechStak">
        <h2
          className={`${
            isDarkMode ? " text-white-200" : " text-slate-700"
          } items-center text-center  p-4 rounded-xl lg:text-4xl text-2xl font-bold -mb-10 pt-14 mt-5 h2`}
        >
          Tech Stack
        </h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=" grid grid-cols-2 mt-20 sm:grid-cols-2 lg:grid-cols-3  gap-5 "
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${
                isDarkMode
                  ? "bg-slate-950 text-white-200"
                  : "bg-gray-100 text-slate-700"
              }    items-center text-center flex flex-col p-4 m-2 lg:mx-10  rounded-xl shadow-xl`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={70}
                height={10}
                className="rounded-md items-center flex justify-center align-middle techstach"
              />
              <h1 className="mt-2 text-sm text-center sm:text-sm md:text-base lg:text-lg font-semibold">
                {img.alt}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

{
  /* <div>
        <h1></h1>
      </div>

    
      <div>
        <div>
          
          <Image src="/html.png" alt=""   width={100} height={150}/>
        
        <h1>
          </h1>
          </div>
        <div>
          
          <Image src="" alt=""  width={100} height={150}/>
        
        <h1>
          </h1>
          </div>
        <div>
          
          <Image src="" alt=""/>
        
        <h1>
          </h1>
          </div>
        <div><Image src="" alt=""  width={100} height={}/>
        
        <h1>
          </h1>
          </div>
        <div>
          
          <Image src="" alt=""  width={100} height={150}/>
        
        <h1>
          </h1>
          </div>
        <div>
          
          <Image src="" alt=""  width={100} height={150}/>
        
        <h1>
          </h1>
          </div>
        <div>
          
          <Image src="" alt=""  width={100} height={150}/>
        
        <h1>
          </h1>
          </div>
        <div>
          
          <Image src="" alt=""  width={100} height={150}/>
        
        <h1>
          </h1>
          </div>


      </div> */
}

export default Stak;
