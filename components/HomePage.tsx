import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

function HomePage({}: Props) {
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
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative flex justify-center items-center"
        transition={{ duration: 2 }}
      >
        <div className="absolute mt-36 border border-[#ff8500] rounded-full h-[180px] w-[180px] animate-[pulse_6s_infinite]" />
        <div className="absolute mt-36 border border-[#ff8500] rounded-full h-[180px] w-[180px] animate-[ping_3s_infinite]" />
        <div className="absolute mt-36 border border-[#ff8500] rounded-full h-[90px] w-[90px] animate-[ping_3s_infinite]" />
      </motion.div>
      <img
        src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
        alt="home page image"
        className="relative rounded-full h-36 w-36 object-cover z-10"
      />
      <div className="z-20">
        <h2 className="uppercase tracking-[24px] text-gray-500 text-sm font-bold py-5 hover:text-gray-600">
          Tech addicted
        </h2>
        <h1 className="text-3xl tracking-[2px] lg:text-4xl text-gray-300 font-semibold py-5">
          <span className="mr-3">Aggiungere parole: {text}</span>
          <Cursor cursorColor="#ff8500" />
        </h1>
        <div className="space-x-5">
          <Link href="#about">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="homePageButton tracking-[6px]"
            >
              About Me
            </motion.button>
          </Link>
          <Link href="#works">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="homePageButton tracking-[6px]"
            >
              Works
            </motion.button>
          </Link>
          <Link href="#passions">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="homePageButton tracking-[6px]"
            >
              Passions
            </motion.button>
          </Link>
          <Link href="#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="homePageButton tracking-[6px]"
            >
              Resume
            </motion.button>
          </Link>
          <Link href="#contactMe">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="homePageButton tracking-[6px]"
            >
              Contact Me
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
