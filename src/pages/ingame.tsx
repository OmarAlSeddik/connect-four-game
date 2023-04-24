import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Ingame from "~/components/Ingame";

const IngamePage: NextPage = () => {
  const variants = {
    initial: { y: "-100vh" },
    animate: { y: 0 },
    exit: { y: "-100vh" },
  };
  return (
    <>
      <Head>
        <meta name="description" content="Ingame" />
      </Head>
      <motion.main
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center bg-cLight"
        transition={{ duration: "0.75", ease: "easeOut" }}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Ingame />
      </motion.main>
    </>
  );
};

export default IngamePage;
