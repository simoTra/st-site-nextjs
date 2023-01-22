import React from "react";
import { motion } from "framer-motion";
import { Widget } from "@typeform/embed-react";

type Props = {};

function ContactMe({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col text-center overflow-hidden md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl hover:text-gray-600">
        CONTACT ME
      </h3>
      <Widget
        id="Us5GEPwa"
        style={{ width: "100%", height: "75%" }}
        className="pt-24"
      />
    </motion.div>
    
  );
}

export default ContactMe;
