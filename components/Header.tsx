import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-20">
      <motion.div
        initial={{ /* y: -500 */ opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        {socials.map((s) => (
          <SocialIcon
            key={s._id}
            network={s.title.toLocaleLowerCase()}
            fgColor="gray"
            bgColor="transparent"
            url={s.url}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ /*  y: -500 */ opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-gray-500 cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <Link href="#contactMe">
          <p className="hidden md:inline-flex text-sm">Contact me</p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
