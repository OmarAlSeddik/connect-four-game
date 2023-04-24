import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Rules = () => {
  const variants = {
    initial: { y: 25, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const containerVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  return (
    <motion.div
      transition={{ duration: 1.5 }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative flex w-[30rem] max-w-[90%] flex-col gap-[2rem]
  rounded-[2.5rem] border-[3px] border-black 
  bg-white px-[1rem] py-[2rem] shadow-custom sm:px-[2rem]"
    >
      <motion.h1
        transition={{ duration: 1.5, delay: 0.2 }}
        variants={variants}
        initial="initial"
        animate="animate"
        className="text-center text-lg font-bold"
      >
        RULES
      </motion.h1>
      <div className="flex flex-col gap-[1rem]">
        <motion.h2
          transition={{ duration: 1.5, delay: 0.4 }}
          variants={variants}
          initial="initial"
          animate="animate"
          className="text-md font-bold text-cDark"
        >
          OBJECTIVE
        </motion.h2>
        <motion.p
          transition={{ duration: 1.5, delay: 0.6 }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </motion.p>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <motion.h2
          transition={{ duration: 1.5, delay: 0.8 }}
          variants={variants}
          initial="initial"
          animate="animate"
          className="text-md font-bold text-cDark"
        >
          HOW TO PLAY
        </motion.h2>
        <motion.ol
          className="ol"
          transition={{ duration: 1.5, delay: 0.8 }}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <li className="li">Red goes first in the first game.</li>
          <li className="li">
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li className="li">
            The game ends when there is a 4-in-a-row or a stalemate.
          </li>
          <li className="li">
            The starter of the previous game goes second on the next game.
          </li>
        </motion.ol>
      </div>
      <Link
        className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2"
        href="/"
      >
        <Image
          src="images/icon-check.svg"
          alt="Confirm"
          width={64}
          height={64}
        />
      </Link>
    </motion.div>
  );
};

export default Rules;
