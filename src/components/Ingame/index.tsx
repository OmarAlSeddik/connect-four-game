import Image from "next/image";
import Board from "./Board";
import Score from "./Score";

const Ingame = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-cLight">
      <div className="absolute bottom-0 h-[12.5rem] w-full rounded-t-[3.75rem] bg-cDark" />
      <div className="mb-[3.5rem] mt-[2rem] flex w-[40rem] max-w-[90%] items-center justify-between">
        <button className="f-xs rounded-[1.25rem] bg-cDark px-[1rem] py-[0.5rem] text-white transition hover:bg-cRed">
          MENU
        </button>
        <Image src="images/logo.svg" alt="logo" width={48} height={48} />
        <button className="f-xs rounded-[1.25rem] bg-cDark px-[1rem] py-[0.5rem] text-white transition hover:bg-cRed">
          RESTART
        </button>
      </div>
      <div className="items-center justify-center gap-[2.5rem] lg:flex lg:flex-row">
        <Score player={1} />
        <Board />
        <Score player={2} />
      </div>
    </main>
  );
};

export default Ingame;
