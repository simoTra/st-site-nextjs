import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Passions = (props: Props) => {
  const passions = ["3d print", 2, 3, 4, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col text-center overflow-hidden text-lft md:text-left md:flex-row max-w-full  px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl hover:text-gray-600">
        PASSIONS
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ff8500]">
        {passions.map((p, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="uppercase tracking-[12px] text-center text-gray-500 hover:text-gray-600">
                {p}
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                omnis asperiores rerum accusantium eum mollitia repellat, ex
                fuga ad, eius corporis consequatur eos nisi perferendis quod
                illo vel aliquid. Modi?
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Passions;
