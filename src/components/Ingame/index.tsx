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
        className={`absolute bottom-0 h-[12.5rem] w-full rounded-t-[3.75rem] ${bgColor}`}
      />
      <div className="mb-[3.5rem] mt-[2rem] flex w-[40rem] max-w-[90%] items-center justify-between">
        <button
          className="rounded-[1.25rem] bg-cDark px-[1rem] py-[0.5rem] text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={togglePause}
        >
          MENU
        </button>
        <Image src="images/logo.svg" alt="logo" width={48} height={48} />
        <button
          className="rounded-[1.25rem] bg-cDark px-[1rem] py-[0.5rem] text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={restart}
        >
          RESTART
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-[2.5rem] lg:hidden">
        <div className="flex gap-[1rem] sm:gap-[2rem]">
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
