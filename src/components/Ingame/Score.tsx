import { motion } from "framer-motion";
import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const Score = ({ player }: { player: number }) => {
  const { vsCPU, player1Score, player2Score } = useAppContext();
  let src = "";
  let text = "";
  let score;
  switch (player) {
    case 1:
      src = vsCPU ? "images/you.svg" : "images/player-one.svg";
      text = vsCPU ? "YOU" : "PLAYER 1";
      score = player1Score;
      break;
    case 2:
      src = vsCPU ? "images/cpu.svg" : "images/player-two.svg";
      text = vsCPU ? "CPU" : "PLAYER 2";
      score = player2Score;
      break;
  }

  return (
    <div
      className={`${
        player === 1 ? "sm:flex-row" : "sm:flex-row-reverse"
      } relative flex h-[5.0625rem] w-[8.875rem] flex-col items-center justify-between
      rounded-[1.25rem] border-[3px] border-black bg-white
      py-[0.5rem] shadow-custom sm:h-[6.25rem] sm:w-[17rem] sm:justify-around lg:h-[10rem] lg:w-[8.8125rem]
      lg:flex-col lg:justify-end`}
    >
      <div
        className={`absolute top-1/2 h-[3.6875rem] w-[3.375rem] translate-y-[-50%]
        lg:left-1/2 lg:top-0 lg:translate-x-[-50%]
        ${
          player === 1
            ? "right-full translate-x-[50%]"
            : "left-full translate-x-[-50%]"
        }
        `}
      >
        <Image src={src} alt={text} fill />
      </div>
      <h2 className="font-bold sm:text-sm">{text}</h2>
      <motion.h2
        key={score}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 0.5,
          times: [0, 0.5, 1],
        }}
        className="text-md font-bold sm:text-lg"
      >
        {score}
      </motion.h2>
    </div>
  );
};

export default Score;
