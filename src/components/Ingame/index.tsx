import Image from "next/image";
import { useState } from "react";
import Board from "./Board";
import Modal from "./Modal";
import Score from "./Score";

const Ingame = () => {
  const [modalActive, setModalActive] = useState(false);
  const toggleModal = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-cLight">
      <Modal modalActive={modalActive} toggleModal={toggleModal} />
      <div className="absolute bottom-0 h-[12.5rem] w-full rounded-t-[3.75rem] bg-cDark" />
      <div className="mb-[3.5rem] mt-[2rem] flex w-[40rem] max-w-[90%] items-center justify-between">
        <button
          className="rounded-[1.25rem] bg-cDark px-[1rem] py-[0.5rem] text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={toggleModal}
        >
          MENU
        </button>
        <Image src="images/logo.svg" alt="logo" width={48} height={48} />
        <button className="rounded-[1.25rem] bg-cDark px-[1rem] py-[0.5rem] text-xs font-bold text-white transition-all hover:bg-cRed">
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
    </main>
  );
};

export default Ingame;
