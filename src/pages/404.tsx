import { motion } from "framer-motion";
import { type NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  const variants = {
    initial: { y: "-100vh" },
    animate: { y: 0 },
    exit: { y: "-100vh" },
  };

  return (
    <motion.main
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-[1rem] bg-cDark text-center"
      transition={{ duration: "0.75", ease: "easeOut" }}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="text-lg text-slate-100">404</h1>
      <h2 className="text-md text-slate-100">
        Nothing interesting to find here!
      </h2>
      <Link
        href={"/"}
        className="rounded-[1.25rem] bg-cRed px-[1rem] py-[0.5rem] text-xs
        font-bold text-white transition-all hover:bg-cYellow"
      >
        Go Back
      </Link>
    </motion.main>
  );
};

export default NotFoundPage;
