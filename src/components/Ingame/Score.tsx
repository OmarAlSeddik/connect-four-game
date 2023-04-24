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
      } relative flex w-[10.5625rem] flex-col items-center justify-between
      rounded-[1.25rem] border-[3px] border-black bg-white
      py-[0.5rem] shadow-custom sm:w-[18.5rem] sm:gap-[1rem] sm:px-[3rem] sm:py-[1rem] lg:w-[8.8125rem]
      lg:flex-col lg:p-0 lg:pb-[1rem] lg:pt-[3rem]`}
    >
      <Image
        src={src}
        alt={text}
        width={54}
        height={59}
        className={`absolute top-1/2 translate-y-[-50%] lg:left-1/2 lg:top-0 lg:translate-x-[-50%]
        ${
          player === 1
            ? "right-full translate-x-[50%]"
            : "left-full translate-x-[-50%]"
        }
        `}
      />
      <h2 className="font-bold sm:text-sm">{text}</h2>
      <h2 className="text-md font-bold sm:text-lg">{score}</h2>
    </div>
  );
};

export default Score;
