import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Passion } from "../typings";

type Props = {
  passions: Passion[];
};

const Passions = ({ passions }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col text-center overflow-hidden text-lft md:text-left md:flex-row max-w-full  px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl hover:text-gray-600">
        PASSIONS
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ff8500]">
        {passions.map((p, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="uppercase tracking-[12px] text-center text-gray-500 hover:text-gray-600">
                {p.title}
              </h4>
              <motion.img
                initial={{ opacity: 0, y: -200, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 0.5,
                }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                src={p.image === undefined ? "" : urlFor(p!.image).url()}
              />
              <p>{p.description}</p>
              <a className="uppercase text-center text-gray-500" href={p.url}>
                Discover more, click here!
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Passions;
