import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "~/context/AppContext";

const MainMenu = () => {
  const { start } = useAppContext();

  return (
    <div
      className="flex w-[30rem] flex-col items-center
      gap-[2rem] rounded-[2.5rem] p-[1rem] sm:border-[3px] sm:border-black
      sm:bg-cLight sm:p-[2rem] sm:shadow-custom"
    >
      <Image src="images/logo.svg" alt="logo" width={52} height={52} />
      <div className="relative flex h-full w-full flex-col items-center gap-[1rem]">
        <Link
          onClick={() => start(0)}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cYellow p-[1.25rem] text-left text-md font-bold shadow-custom
            transition-all active:shadow-customActive"
        >
          PLAY VS PLAYER
          <Image
            src="images/player-vs-player.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          onClick={() => start(1)}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-[1.25rem] text-left text-md font-bold shadow-custom
            transition-all active:shadow-customActive"
        >
          PLAY VS CPU (EASY)
          <Image
            src="images/player-vs-cpu.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          onClick={() => start(2)}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-[1.25rem] text-left text-md font-bold shadow-custom
            transition-all active:shadow-customActive"
        >
          PLAY VS CPU (MED)
          <Image
            src="images/player-vs-cpu.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          onClick={() => start(3)}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-[1.25rem] text-left text-md font-bold shadow-custom
            transition-all active:shadow-customActive"
        >
          PLAY VS CPU (HARD)
          <Image
            src="images/player-vs-cpu.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          className="w-full max-w-[25rem] rounded-[1.25rem]
           border-[3px] border-black bg-white p-[1.25rem] text-left text-md font-bold shadow-custom
           transition-all active:shadow-customActive"
          href="/rules"
        >
          GAME RULES
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
