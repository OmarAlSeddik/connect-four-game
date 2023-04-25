import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Rules from "~/components/Rules";

const RulesPage: NextPage = () => {
  const variants = {
    initial: { y: "-100vh" },
    animate: { y: 0 },
    exit: { y: "-100vh" },
  };
  return (
    <>
      <Head>
        <meta name="description" content="Rules" />
      </Head>
      <motion.main
        className="absolute inset-0 flex items-center justify-center bg-cDark"
        transition={{ duration: "0.75", ease: "easeOut" }}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Rules />
      </motion.main>
    </>
  );
};

export default RulesPage;
