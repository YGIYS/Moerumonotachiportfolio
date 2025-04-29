"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/app/components/ui/CanvasRevealEffect";

import Fase1 from "./aproach/Fase1";
import Fase2 from "./aproach/Fase2";
import Fase3 from "./aproach/Fase3";
import Fase4 from "./aproach/Fase4";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card
          titleheader="
            Plan and Architect the Project."
          title="
          
          Define the purpose and main features (what problem it solves).

Plan the architecture: How the frontend, backend, database, and APIs will interact.

Create wireframes or mockups for the user interface (UI).

Decide on technology stacks (e.g., React + Node.js + PostgreSQL).

Good planning saves massive time later."
          icon={<Fase1 />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          titleheader="
              Structure and Implement Code Systematically"
          title="

Set up a modular codebase (separate concerns clearly: components, services, utilities).

Follow best practices: clean code, reusable functions, meaningful naming.

Implement core features first (e.g., authentication, basic CRUD operations).

Always work in small, testable steps (don't try to build everything at once).

Think simple and extendable over fast and messy."
          icon={<Fase2 />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          titleheader="
             Test, Debug, and Optimize"
          title="Regularly test functionality (unit tests, integration tests, manual testing).

Debug efficiently (console logs early, use dev tools, create error boundaries).

Optimize performance: loading speed, database queries, image sizes, lazy loading.

Prepare for scaling: make sure the app can grow without breaking.

Launch small, polish constantly, scale wisely."
          icon={<Fase3 />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card
          titleheader="
            Plan and Architect the Project."
          title="Regularly test functionality (unit tests, integration tests, manual testing).

Debug efficiently (console logs early, use dev tools, create error boundaries).

Optimize performance: loading speed, database queries, image sizes, lazy loading.

Prepare for scaling: make sure the app can grow without breaking.

Launch small, polish constantly, scale wisely."
          icon={<Fase4 />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  titleheader,
}: {
  title: string;
  titleheader?: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h1 className="dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 text-3xl font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {titleheader}{" "}
        </h1>
        <h2 className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
