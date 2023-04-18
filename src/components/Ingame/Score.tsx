import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const Score = ({ player }: { player: number }) => {
  const { vsAi, player1Score, player2Score } = useAppContext();
  let src = "";
  let text = "";
  let score;
  switch (player) {
    case 1:
      src = vsAi ? "images/you.svg" : "images/player-one.svg";
      text = vsAi ? "YOU" : "PLAYER 1";
      score = player1Score;
      break;
    case 2:
      src = vsAi ? "images/cpu.svg" : "images/player-two.svg";
      text = vsAi ? "CPU" : "PLAYER 2";
      score = player2Score;
      break;
  }

  return (
    <div
      className={`${
        player == 1 ? "sm:flex-row" : "sm:flex-row-reverse"
      } relative flex flex-col items-center rounded-[1.25rem]
      border-[3px] border-black bg-white px-[2rem] py-[0.25rem]
      shadow-custom sm:gap-[1rem]  sm:px-[3rem] sm:py-[1rem] lg:flex-col
      lg:px-[1.5rem] lg:pb-[1rem] lg:pt-[3rem]`}
    >
      <Image
        src={src}
        alt={text}
        width={54}
        height={59}
        className={`absolute ${
          player == 1 ? "right-full" : "left-full"
        } top-1/2 ${
          player == 1 ? "translate-x-[50%]" : "translate-x-[-50%]"
        } translate-y-[-50%] lg:left-1/2 lg:top-0 lg:translate-x-[-50%]`}
      />
      <h2 className="font-bold sm:text-sm">{text}</h2>
      <h2 className="text-mm font-bold sm:text-lg">{score}</h2>
    </div>
  );
};

export default Score;
