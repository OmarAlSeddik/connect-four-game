import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "~/context/AppContext";

const MainMenu = () => {
  const { startVsCPU, startVsPlayer } = useAppContext();

  return (
    <main className="flex min-h-screen items-center justify-center bg-cDark">
      <div
        className="flex h-[27.1875rem] w-[30rem] flex-col items-center
      gap-[2rem] rounded-[2.5rem] px-[1rem] py-[1rem] sm:border-[3px] sm:border-black
      sm:bg-cLight sm:px-[2rem] sm:shadow-custom"
      >
        <Image src="images/logo.svg" alt="logo" width={52} height={52} />
        <div className="relative flex h-full w-full flex-col items-center">
          <Link
            onClick={startVsPlayer}
            href="/ingame"
            className="absolute flex h-[4.5rem] w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cYellow p-[1.25rem] text-left text-mm font-bold shadow-custom
            transition-all hover:shadow-customHover active:mt-[0.3125rem] active:shadow-customActive"
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
            onClick={startVsCPU}
            href="/ingame"
            className="absolute top-1/3 flex h-[4.5rem] w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-[1.25rem] text-left text-mm font-bold shadow-custom
            transition-all hover:shadow-customHover active:mt-[0.3125rem] active:shadow-customActive"
          >
            PLAY VS CPU
            <Image
              src="images/player-vs-cpu.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </Link>
          <Link
            className="absolute top-2/3 h-[4.5rem] w-full max-w-[25rem] rounded-[1.25rem]
           border-[3px] border-black bg-white p-[1.25rem] text-left text-mm font-bold shadow-custom
           transition-all hover:shadow-customHover active:mt-[0.3125rem] active:shadow-customActive"
            href="/rules"
          >
            GAME RULES
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainMenu;
