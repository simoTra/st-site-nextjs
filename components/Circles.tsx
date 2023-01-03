import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Circles({}: Props) {
  return (
    <motion.div className="relative flex justify-center items-center">
      <div className="absolute border border-stone-400 rounded-full h-[200px] w-[200px]" />
      <div />
      <div />
      <div />
    </motion.div>
  );
}

export default Circles;
