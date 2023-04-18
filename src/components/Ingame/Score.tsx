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
      className="relative flex h-[11.6875rem] w-[8.8125rem]
flex-col items-center gap-[2rem] rounded-[2.5rem] border-[3px] border-black
bg-white px-[1rem] pt-[2rem] shadow-custom"
    >
      <Image
        src={src}
        alt={text}
        width={64}
        height={64}
        className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-50%]"
      />
      <h2 className="f-s">{text}</h2>
      <h2 className="f-l">{score}</h2>
    </div>
  );
};

export default Score;
