import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Rules = () => {
  return (
    <div
      className="relative flex w-[30rem] max-w-[90%] flex-col gap-[1rem] rounded-[2.5rem]
  border-[3px] border-black bg-white 
  px-[1rem] py-[2rem] shadow-custom sm:px-[2rem] tall:gap-[2rem]"
    >
      <h1 className="text-center text-lg font-bold">RULES</h1>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-md font-bold text-cDark">OBJECTIVE</h2>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-md font-bold text-cDark">HOW TO PLAY</h2>
        <ol className="ol">
          <li className="li">Red goes first in the first game.</li>
          <li className="li">
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li className="li">
            The game ends when there is a 4-in-a-row or a stalemate.
          </li>
          <li className="li">
            The starter of the previous game goes second on the next game.
          </li>
        </ol>
      </div>
      <Link
        className="height-[] absolute bottom-0 left-1/2 flex h-[4.375rem] w-[4.375rem]
        translate-x-[-50%] translate-y-1/2 items-center justify-center rounded-[50%]
        border-[3px] border-black bg-cRed p-[2rem] text-white
        shadow-custom2 transition-all desktopHover:hover:border-cLight desktopHover:hover:shadow-customHover2"
        href="/"
      >
        <FontAwesomeIcon icon={faCheck} className="text-[2rem]" />
      </Link>
    </div>
  );
};

export default Rules;
