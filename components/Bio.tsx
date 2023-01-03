import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Circles from "./Circles";

type Props = {};

function Bio({}: Props) {
  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      className="h-screen flex flex-col items-center text-center justify-center overflow-hidden py-5"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <img
        src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
        alt="bio image"
        className="relative rounded-full h-32 w-32 object-cover"
      />
      {/* <Circles /> */}
      <h2 className="uppercase tracking-[12px] text-gray-500 text-sm font-bold py-5 hover:text-gray-600">
        Tech addicted
      </h2>
      <h1 className="text-3xl lg:text-4xl text-gray-300 font-semibold py-5">
        <span className="mr-3">Aggiungere parole: {text}</span>
        <Cursor cursorColor="orange" />
      </h1>
      <div>
        <button className="bioButton">Resume</button>
        <button className="bioButton">Works</button>
        <button className="bioButton">Passions</button>
        <button className="bioButton">Contact Me</button>
      </div>
    </motion.div>
  );
}

export default Bio;
