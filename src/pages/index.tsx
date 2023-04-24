import { motion } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import MainMenu from "~/components/MainMenu";

const MainMenuPage: NextPage = () => {
  const variants = {
    initial: { y: "100vh" },
    animate: { y: 0 },
    exit: { y: "100vh" },
  };

  return (
    <>
      <Head>
        <meta name="description" content="Main Menu" />
      </Head>
      <motion.main
        className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-cDark"
        transition={{ duration: "0.75", ease: "easeOut" }}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MainMenu />
      </motion.main>
    </>
  );
};

export default MainMenuPage;
