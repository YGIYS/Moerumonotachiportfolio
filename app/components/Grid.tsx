import React from "react";

import { BentoGrid, BentoGridItem } from "../../app/components/ui/BentoGrid";
import { cn } from "../lib/utils";

const gridItems = [
  {
    src: "/b1.svg",
    alt: "Image 1",
    title: "I prioritize client collaboration, fostering open communication",
    description: "Unleash your creativity with our design tools.",

    titleStyle: "text-blue-500 font-bold    right-48 top-72 bentogridtext",
    gridClassName: "col-span-5 row-span-2 rounded-xl border-2 border-blue-500 ",
    descriptionClassName: " right-48 top-72 mt-10 text-center text-xs ml-22 ",
  },
  {
    src: "/grid_pic3.jpg",
    alt: "Image 2",
    title: "Innovative Solutions",
    description: "Solve problems with cutting-edge technology.",

    titleStyle: "text-green-500 italic text-base font-bold",
    gridClassName:
      "col-span-1 row-span-2 rounded-xl border-2 border-blue-500 sm:flex sm:flex-col  ",
    descriptionClassName: " ",
  },
  {
    src: "/gridpic.jpg",
    alt: "Image 3",
    title: "Modern Technology",
    description: "Stay ahead with the latest tech trends.",

    titleStyle:
      "text-red-500 text-base font-bold  text-center item center  top-[43rem] right-[20rem]",
    gridClassName:
      "col-span-3 row-span-2 rounded-xl border-2 border-blue-500 sm:flex sm:flex-col ",
    descriptionClassName: " top-[45rem] right-[18rem] sm:right[-5rem] ",
  },

  {
    src: "/grid-pic1.jpg",
    alt: "Image 4",
    title: "Future Trends",
    description: "Explore what the future holds for technology.",

    titleStyle: "text-fuchsia-500 font-mono text-3xl text-base font-bold",
    gridClassName:
      "col-span-2  row-span-2 rounded-xl border-2 border-blue-500 sm:flex sm:flex-col ",
    descriptionClassName: " ",
  },

  {
    src: "grid-pic5.jpg",
    alt: "Image 4",
    title: "Future Trends",
    description: "Explore what the future holds for technology.",

    titleStyle: "text-amber-400 text-base font-bold",
    gridClassName:
      "md:col-span-1 md:row-span-2 rounded-xl border-2 border-blue-500 sm:col-span-4 sm:row-span-4 ",
    descriptionClassName: " ",
  },
];

console.log(gridItems); // Check if data is correct

export default function CustomBentoGrid() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-4 rounded-xl p-10">
      {gridItems.map((item, index) => (
        <div key={index} className={`${item.gridClassName}`}>
          <div className="relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[30rem]  object-cover object-right-top rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-slate-400 p-4">
              <h2 className={` text-end ${item.titleStyle}`}>{item.title}</h2>
              <p className="text-center">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
