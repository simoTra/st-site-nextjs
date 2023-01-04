import { motion } from "framer-motion";
import React from "react";

type Props = {};

const WorkCard = (props: Props) => {
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
        src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
        alt="work image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job title</h4>
        <p className="font-bold text-2xl mt-1">work place</p>
        <div className="flex space-x-2 my-2">
          <img
            className="rounded-full h-10 w-10"
            src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
            alt="skill image"
          />
          <img
            className="rounded-full h-10 w-10"
            src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
            alt="skill image"
          />
          <img
            className="rounded-full h-10 w-10"
            src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
            alt="skill image"
          />
        </div>
        <p className="uppercase py-5 text-gray-300 ">dates</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
          <li>bla</li>
        </ul>
      </div>
    </motion.article>
  );
};

export default WorkCard;
