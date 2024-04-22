"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col gap-10 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-full lg:h-full lg:w-1/2 relative justify-start">
          <Image
            src="/worldmap.png"
            alt=""
            fill
            className="object-cover h-full w-full"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <div className="flex flex-col gap-5 text-4xl md:text-6xl font-bold">
            <span className="bg-yellow-500 text-black">Employer Nexus:</span>
            <span className="text-white">Where talent meets match</span>
          </div>
          {/* DESC */}
          <p className="md:text-xl text-white">
            At Employer Nexus, we envision a world where every professional
            finds their perfect fit. We believe in the power of connection and
            the impact it can have on individuals and organizations alike.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
