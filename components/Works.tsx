import { motion } from "framer-motion";
import React from "react";
import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col text-center overflow-hidden text-lft md:text-left md:flex-row max-w-full  px-10 justify-evenly mx-auto items-center z-10"
    >
      <h3 className="absolute top-24 tracking-[24px] text-gray-500 text-2xl hover:text-gray-600">
        EXPERIENCES
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#ff8500] scrollbar-thin">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </motion.div>
  );
};

export default Works;
