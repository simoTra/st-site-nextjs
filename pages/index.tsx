import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import { GetStaticProps, NextPage } from "next";
import About from "../components/About";
import Works from "../components/Works";
import Passions from "../components/Passions";
import ContactMe from "../components/ContactMe";
import { motion } from "framer-motion";
import Link from "next/link";
import { Info, Passion, Skill, Social, Work } from "../typings";
import { fetchInfo } from "../utils/fetchInfo";
import { fetchWorks } from "../utils/fetchWorks";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchPassions } from "../utils/fetchPassions";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  info: Info;
  works: Work[];
  skills: Skill[];
  passions: Passion[];
  socials: Social[];
};

const Home = ({ info, works, skills, passions, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ff8500]">
      <Head>
        <title>Simone Traversi</title>
      </Head>
      <Header socials={socials} />
      <section id="homePage" className="snap-start">
        <HomePage info={info} />
      </section>
      <section id="about" className="snap-center">
        <About info={info} />
      </section>
      <section id="works" className="snap-center">
        <Works works={works} />
      </section>
      <section id="passions" className="snap-start">
        <Passions passions={passions} />
      </section>
      <section id="contactMe" className="snap-center">
        <ContactMe />
      </section>
      <footer className="sticky bottom-5 sm:bottom-10 cursor-pointer z-30">
        <Link href="#homePage">
          <div className="flex items-center justify-center">
            <svg
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              viewBox="-35.75 -35.75 294.91 294.91"
              fill="#000000"
              transform="rotate(270)"
            >
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#ff8500"
                strokeWidth="31.27782"
              >
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="57.179,223.413 51.224,217.276 159.925,111.71 51.224,6.127 57.179,0 172.189,111.71 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="57.179,223.413 51.224,217.276 159.925,111.71 51.224,6.127 57.179,0 172.189,111.71 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </Link>
      </footer>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const info: Info = await fetchInfo();
  const works: Work[] = await fetchWorks();
  const skills: Skill[] = await fetchSkills();
  const passions: Passion[] = await fetchPassions();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      info,
      works,
      skills,
      passions,
      socials,
    },
    revalidate: 10,
  };
};
