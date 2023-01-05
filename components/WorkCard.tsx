import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Work } from "../typings";

type Props = {
  work: Work;
};

const WorkCard = ({ work }: Props) => {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-3 00"
    >
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        src={
          work?.image === undefined
            ? "https://cdn.sanity.io/images/v03ttooh/production/71a48a1ef8f564ecaea9c149dc818bff914bd15a-1530x1020.jpg"
            : urlFor(work?.image).url()
        }
        alt="work image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job title</h4>
        <p className="font-bold text-2xl mt-1">work place</p>
        <div className="flex space-x-2 my-2">
          {work.skill.map((s) => (
            <img
              className="rounded-full h-10 w-10"
              src={
                s.image === undefined
                  ? "https://cdn.sanity.io/images/v03ttooh/production/71a48a1ef8f564ecaea9c149dc818bff914bd15a-1530x1020.jpg"
                  : urlFor(s?.image).url()
              }
              alt="skill image"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 ">dates</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {work.bulletPoint.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default WorkCard;
