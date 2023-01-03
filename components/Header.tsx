import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{ /* y: -500 */ opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <SocialIcon
          network="instagram"
          fgColor="gray"
          bgColor="transparent"
          url="https://www.google.it"
        />
        <SocialIcon network="github" fgColor="gray" bgColor="transparent" url="https://www.google.it"/>
      </motion.div>
      <motion.div
        initial={{ /*  y: -500 */ opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-500 cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p
          /* className="uppercase" */ className="hidden md:inline-flex text-sm"
        >
          Contact me
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
