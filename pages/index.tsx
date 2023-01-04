import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import { NextPage } from "next";
import About from "../components/About";
import Works from "../components/Works";
import Passions from "../components/Passions";
import ContactMe from "../components/ContactMe";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ff8500]">
      <Head>
        <title>Simone Traversi</title>
      </Head>
      <Header />
      <section id="homePage" className="snap-start">
        <HomePage />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="works" className="snap-center">
        <Works />
      </section>
      <section id="passions" className="snap-start">
        <Passions />
      </section>
      <section id="contactMe" className="snap-center">
        <ContactMe />
      </section>
      <Link href="#homePage">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="https://i.picsum.photos/id/519/200/200.jpg?hmac=7MwcBjyXrRX5GB6GuDATVm_6MFDRmZaSK7r5-jqDNS0"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </footer>
      </Link>
      {/*       <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="w-full absolute top-[30%] bg-[#ff8500]/20 h-[500px] -skew-y-12 z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="w-full absolute top-[30%] bg-[#ff8500]/20 h-[500px] -skew-y-[-12deg] z-0"
      /> */}
    </div>
  );
};

export default Home;
