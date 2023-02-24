import { motion } from "framer-motion";
import React from "react";
import { Work } from "../typings";
import WorkCard from "./WorkCard";

type Props = {
  works: Work[];
};

const Works = ({ works }: Props) => {
  return (
    <section className="h-screen relative flex flex-col text-center overflow-hidden text-lft md:text-left md:flex-row max-w-full  px-10 justify-evenly mx-auto items-center py-10">
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl hover:text-gray-600 hidden md:block">
        EXPERIENCES
      </h3>
      <div className="mx-auto xs:flex grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 overflow-x-auto justify-around">
        {works.map((w) => (
          <WorkCard key={w._id} work={w} />
        ))}
      </div>
    </section>
  );
};

export default Works;
