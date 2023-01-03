import Head from "next/head";
import Header from "../components/Header";
import Bio from "../components/Bio";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Simone Traversi</title>
      </Head>
      <Header />
      <section id="bio" className="snap-center">
        <Bio />
      </section>
      {/* Works */}
      {/* Passions */}
      {/* Resume */}
      {/* Typeform */}
    </div>
  );
}
