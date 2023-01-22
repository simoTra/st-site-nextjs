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
      className="rounded-xl bg-white p-3 flex flex-col justify-between"
    >
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <img src={urlFor(work?.image).url()} alt="experience image" />
      </div>

      <div className="mt-1 p-2">
        <h2 className="text-slate-700 font-bold text-center">{work.job}</h2>
        <p className="mt-1 text-sm text-slate-600 text-center">
          {work.company}
        </p>
        <p className="mt-1 text-sm text-slate-500 text-center">
          {work.initialData} - {work.current ? "Present" : work.endData}
        </p>

        <div className="mt-3 flex items-end justify-between text-start">
          <ul className="list-disc">
            {work.bulletPoint.map((bp, i) => (
              <li key={i} className="text-sm text-slate-400">
                {bp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default WorkCard;
