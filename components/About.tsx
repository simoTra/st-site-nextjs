import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Info } from "../typings";

type Props = {
  info: Info;
};

const About = ({ info }: Props) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col text-center overflow-hidden md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-10"
    >
      <motion.h3
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute top-24 tracking-[20px] text-gray-500 text-2xl hover:text-gray-600 hidden md:block"
      >
        ABOUT
      </motion.h3>

      <motion.img
        src={urlFor(info?.bioImage).url()}
        alt="about image"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h:96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <motion.h4
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-4xl font-semibold hidden md:block"
        >
          About me
        </motion.h4>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-base"
        >
          {info.bio}
        </motion.p>
        <div>
          <Link href={`${info.resume}?dl=simone_traversi_resume.pdf`}>
            <motion.button
              initial={{ x: -200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="homePageButton tracking-[6px]"
            >
              resume
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
