import Image from "next/image";
import { useAppContext } from "~/context/AppContext";
import Board from "./Board";
import Modal from "./Modal";
import Score from "./Score";

const Ingame = () => {
  const { restart, togglePause, gameOver } = useAppContext();
  let bgColor = "";
  switch (gameOver.winner) {
    case 0:
      bgColor = "bg-cDark";
      break;
    case 1:
      bgColor = "bg-cRed";
      break;
    case 2:
      bgColor = "bg-cYellow";
      break;
  }

  return (
    <>
      <Modal />
      <div
        className={`absolute bottom-0 h-[20%] w-full rounded-t-[3.75rem] sm:h-[12.5rem] ${bgColor}`}
      />
      <div
        className="mx-auto flex w-[39.5rem] max-w-[90%] items-center
      justify-between py-[1rem] tall:pb-[3.5rem] tall:pt-[2rem]"
      >
        <button
          className="w-[6.75rem] rounded-[1.25rem] bg-cDark py-[0.5rem] text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={togglePause}
        >
          MENU
        </button>
        <div className="relative h-[2.5rem] w-[2.5rem] sm:h-[3.25rem] sm:w-[3.25rem]">
          <Image src="images/logo.svg" alt="logo" fill />
        </div>
        <button
          className="w-[6.75rem] rounded-[1.25rem] bg-cDark py-[0.5rem] text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={restart}
        >
          RESTART
        </button>
      </div>
      <div className="flex h-full flex-col items-center gap-[1rem] lg:hidden tall:gap-[2.5rem]">
        <div className="flex max-w-[90%] gap-[1rem] sm:gap-[2rem]">
          <Score player={1} />
          <Score player={2} />
        </div>
        <Board />
      </div>
      <div className="hidden items-center justify-center gap-[2.5rem] lg:flex">
        <Score player={1} />
        <Board />
        <Score player={2} />
      </div>
    </>
  );
};

export default Ingame;
