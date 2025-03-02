import { cn } from "@/app/lib/utils";
import { img } from "motion/react-client";
import { img } from "motion/react-m";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[10rem] grid-cols-1 lg:grid-cols-4 gap-4  md:grid-cols-5 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  id,
  imgClassName,
  titleClassName,
  spareImg,
  colSpan,
  children,
  gridClassName,
  descriptionClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  img?: string;
  colSpan?: number;
  children?: React.ReactNode;
  gridClassName?: string;
    descriptionClassName?: string;
}) => {
  return (
    <div
      className={cn(
        " rounded-3xl  row-span-1 flex flex-col  group/bento  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-blue-700/40 bg-blue-50 justify-between  space-y-1 border-2 border-black-100",
        className
      )}
    >
      <div className={`${id === 5} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute"></div>
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover, object-center")}
          />
        )}
        <div
          className={`absolute right-0 bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>

        <div>
          {id === 5 && (
            <BackgroundGradientAnimation>
              <div className=" absolute z-50 flex items-center justify-center text-white-100 font-bold" />
            </BackgroundGradientAnimation>
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "gradient group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10"
          )}
        />
        <div className="font-sans font-normal text-neutral-700 text-sm md:text:xs lg:text-base dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-5 mt-2">
          {title}
        </div>
      </div>

      {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-5 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-700 text-xs dark:text-neutral-300">
          {description}
        </div> */}

      {/* </div> */}
    </div>
  );
};
